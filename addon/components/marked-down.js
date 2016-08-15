import Component from 'ember-component';
import layout from '../templates/components/marked-down';
import { scheduleOnce } from 'ember-runloop';

export default Component.extend({
  init() {
    this._super(...arguments);
    scheduleOnce('afterRender', this, 'registerElem');
  },

  layout,

  registerElem() {
    this.set('elem', this.$('textarea').get(0));
  }
});
