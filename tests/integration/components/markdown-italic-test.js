import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('markdown-italic', 'Integration | Component | markdown italic', {
  integration: true
});

test('with cursor in default position tokens are appended', function(assert) {
  assert.expect(1);

  this.set('value', 'some text here');

  this.on('valueDidChange', (value) => {
    assert.equal(value, 'some text here__', 'updated value');
  });

  this.render(hbs`
    {{#markdown-italic action="valueDidChange" for='input'}}button text{{/markdown-italic}}
    {{input id='input' value=(readonly value)}}
  `);

  this.$('button').click();
});

test('with cursor in specific position tokens wrap position', function(assert) {
  assert.expect(1);

  this.set('value', 'some text here');

  this.on('valueDidChange', (value) => {
    assert.equal(value, 'some __text here', 'updated value');
  });

  this.render(hbs`
    {{#markdown-italic action="valueDidChange" for='input'}}button text{{/markdown-italic}}
    {{input id='input' value=(readonly value)}}
  `);

  this.$('input').get(0).setSelectionRange(5, 5);
  this.$('button').click();
});

test('tokens wrap selected text', function(assert) {
  assert.expect(1);

  this.set('value', 'some text here');

  this.on('valueDidChange', (value) => {
    assert.equal(value, 'some _text_ here', 'updated value');
  });

  this.render(hbs`
    {{#markdown-italic action="valueDidChange" for='input'}}button text{{/markdown-italic}}
    {{input id='input' value=(readonly value)}}
  `);

  this.$('input').get(0).setSelectionRange(5, 9);
  this.$('button').click();
});
