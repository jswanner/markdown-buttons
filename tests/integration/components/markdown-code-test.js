import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('markdown-code', 'Integration | Component | marked down code', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{markdown-code}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#markdown-code}}
      template block text
    {{/markdown-code}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
