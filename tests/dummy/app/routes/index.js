import Route from 'ember-route';

export default Route.extend({
  setupController(controller) {
    this._super(...arguments);
    controller.set('value', 'a b c d e f g h i j k l m n o p q r s t u v w x y z');
  }
});
