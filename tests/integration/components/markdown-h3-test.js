import hbs from 'htmlbars-inline-precompile';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('markdown-h3', 'Integration | Component | markdown h3', {
  integration: true
});

test('with cursor in default position tokens are appended', function(assert) {
  assert.expect(1);

  this.set('value', 'some text here');

  this.on('valueDidChange', (value) => {
    assert.equal(value, 'some text here### ', 'updated value');
  });

  this.render(hbs`
    {{#markdown-h3 action="valueDidChange" for='input'}}button text{{/markdown-h3}}
    {{input id='input' value=(readonly value)}}
  `);

  this.$('button').click();
});

test('with cursor in specific position tokens wrap position', function(assert) {
  assert.expect(1);

  this.set('value', 'some text here');

  this.on('valueDidChange', (value) => {
    assert.equal(value, 'some ### text here', 'updated value');
  });

  this.render(hbs`
    {{#markdown-h3 action="valueDidChange" for='input'}}button text{{/markdown-h3}}
    {{input id='input' value=(readonly value)}}
  `);

  this.$('input').get(0).setSelectionRange(5, 5);
  this.$('button').click();
});

test('tokens wrap selected text', function(assert) {
  assert.expect(1);

  this.set('value', 'some text here');

  this.on('valueDidChange', (value) => {
    assert.equal(value, 'some ### text here', 'updated value');
  });

  this.render(hbs`
    {{#markdown-h3 action="valueDidChange" for='input'}}button text{{/markdown-h3}}
    {{input id='input' value=(readonly value)}}
  `);

  this.$('input').get(0).setSelectionRange(5, 9);
  this.$('button').click();
});
