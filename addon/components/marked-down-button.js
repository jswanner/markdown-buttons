import Component from 'ember-component';
import { scheduleOnce } from 'ember-runloop';

export default Component.extend({
  attributeBindings: ['type'],

  click() {
    const elem = this.get('elem');
    const { selectionEnd, selectionStart, value } = elem;
    const { precede, succeed } = this.getProperties('precede', 'succeed');
    let altered;
    let alterationStart = selectionStart;
    let alterationEnd = selectionEnd;
    let postSelectionStart = selectionStart;
    let postSelectionEnd = selectionEnd;

    const selection = value.substring(selectionStart, selectionEnd);
    const withSurround = value.substring(selectionStart - precede.length, selectionEnd + succeed.length);
    if (selection.startsWith(precede) && selection.endsWith(succeed)) {
      altered = selection.substring(precede.length, selection.length - succeed.length);
      postSelectionEnd -= (precede.length + succeed.length);
    } else if (withSurround.startsWith(precede) && withSurround.endsWith(succeed)) {
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

    scheduleOnce('afterRender', null, function() {
      elem.focus();
      elem.setSelectionRange(postSelectionStart, postSelectionEnd);
    });
  },

  tagName: 'button',
  type: 'button'
});
