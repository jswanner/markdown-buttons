import hbs from 'htmlbars-inline-precompile';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('markdown-link', 'Integration | Component | markdown link', {
  integration: true
});

test('with cursor in default position tokens are appended', function(assert) {
  assert.expect(1);

  this.set('value', 'some text here');

  this.on('valueDidChange', (value) => {
    assert.equal(value, 'some text here[](url)', 'updated value');
  });

  this.render(hbs`
    {{#markdown-link action="valueDidChange" for='input'}}button text{{/markdown-link}}
    {{input id='input' value=(readonly value)}}
  `);

  this.$('button').click();
});

test('with cursor in specific position tokens wrap position', function(assert) {
  assert.expect(1);

  this.set('value', 'some text here');

  this.on('valueDidChange', (value) => {
    assert.equal(value, 'some [](url)text here', 'updated value');
  });

  this.render(hbs`
    {{#markdown-link action="valueDidChange" for='input'}}button text{{/markdown-link}}
    {{input id='input' value=(readonly value)}}
  `);

  this.$('input').get(0).setSelectionRange(5, 5);
  this.$('button').click();
});

test('tokens wrap selected text', function(assert) {
  assert.expect(1);

  this.set('value', 'some text here');

  this.on('valueDidChange', (value) => {
    assert.equal(value, 'some [text](url) here', 'updated value');
  });

  this.render(hbs`
    {{#markdown-link action="valueDidChange" for='input'}}button text{{/markdown-link}}
    {{input id='input' value=(readonly value)}}
  `);

  this.$('input').get(0).setSelectionRange(5, 9);
  this.$('button').click();
});
