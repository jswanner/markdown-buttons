import Component from 'ember-component';
import { scheduleOnce } from 'ember-runloop';

function endsWith(string, search, position=string.length) {
  position -= search.length;
  const lastIndex = string.indexOf(search, position);
  return lastIndex !== -1 && lastIndex === position;
}

function startsWith(string, search, position=0) {
  return string.substr(position, search.length) === search;
}

export default Component.extend({
  attributeBindings: ['type'],

  click() {
    const elem = document.getElementById(this.get('for'));
    if (!elem) { return; }

    const { selectionEnd, selectionStart, value } = elem;
    const { precede, succeed } = this.getProperties('precede', 'succeed');
    let altered;
    let alterationStart = selectionStart;
    let alterationEnd = selectionEnd;
    let postSelectionStart = selectionStart;
    let postSelectionEnd = selectionEnd;

    const selection = value.substring(selectionStart, selectionEnd);
    const withSurround = value.substring(selectionStart - precede.length, selectionEnd + succeed.length);
    if (startsWith(selection, precede) && endsWith(selection, succeed)) {
      altered = selection.substring(precede.length, selection.length - succeed.length);
      postSelectionEnd -= (precede.length + succeed.length);
    } else if (startsWith(withSurround, precede) && endsWith(withSurround, succeed)) {
      altered = selection;
      alterationStart -= precede.length;
      alterationEnd += succeed.length;
      postSelectionStart -= precede.length;
      postSelectionEnd -= precede.length;
    } else {
      altered = `${precede}${selection}${succeed}`;
      postSelectionStart += precede.length;
      postSelectionEnd += precede.length;
    }

    const result = value.substring(0, alterationStart) + altered + value.substring(alterationEnd);
    this.sendAction('action', result);

    return scheduleOnce('afterRender', null, function() {
      elem.focus();
      elem.setSelectionRange(postSelectionStart, postSelectionEnd);
    });
  },

  tagName: 'button',
  type: 'button'
});
