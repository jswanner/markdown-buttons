import Button from './markdown-button';
import layout from '../templates/components/markdown-quote';

export default Button.extend({
  layout,
  precede: '> ',
  succeed: ''
});
