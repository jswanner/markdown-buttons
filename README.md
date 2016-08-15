# markdown-buttons

Buttons that apply/remove Markdown syntax to selected text in input fields.

## Installation

```shell
$ ember install markdown-buttons
```

## Usage

```handlebars
{{#markdown-bold action=(action (mut value)) for="input"}}Bold{{/markdown-bold}}
{{#markdown-italic action=(action (mut value)) for="input"}}Italic{{/markdown-italic}}
{{#markdown-link action=(action (mut value)) for="input"}}Link{{/markdown-link}}
{{#markdown-quote action=(action (mut value)) for="input"}}Quote{{/markdown-quote}}
{{#markdown-code action=(action (mut value)) for="input"}}Code{{/markdown-code}}
{{#markdown-h1 action=(action (mut value)) for="input"}}H1{{/markdown-h1}}
{{#markdown-h2 action=(action (mut value)) for="input"}}H2{{/markdown-h2}}
{{#markdown-h3 action=(action (mut value)) for="input"}}H3{{/markdown-h3}}
{{#markdown-h4 action=(action (mut value)) for="input"}}H4{{/markdown-h4}}
{{#markdown-h5 action=(action (mut value)) for="input"}}H5{{/markdown-h5}}
{{#markdown-h6 action=(action (mut value)) for="input"}}H6{{/markdown-h6}}
<br/>
{{textarea cols="50" id="input" rows="10" value=(readonly value)}}
```

## Contributing

### Installation

* `git clone` this repository
* `npm install`
* `bower install`

### Running

* `ember server`
* Visit your app at http://localhost:4200.

### Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

### Building

* `ember build`

For more information on using ember-cli, visit [http://ember-cli.com/](http://ember-cli.com/).
