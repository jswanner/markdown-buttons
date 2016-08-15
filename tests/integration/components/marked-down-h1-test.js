import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('marked-down-h1', 'Integration | Component | marked down h1', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{marked-down-h1}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#marked-down-h1}}
      template block text
    {{/marked-down-h1}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
