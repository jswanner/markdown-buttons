import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('marked-down-italic', 'Integration | Component | marked down italic', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{marked-down-italic}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#marked-down-italic}}
      template block text
    {{/marked-down-italic}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
