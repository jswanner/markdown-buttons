import Controller from 'ember-controller';

export default Controller.extend({
  actions: {
    foo(value) {
      this.set('value', value);
    }
  }
});
