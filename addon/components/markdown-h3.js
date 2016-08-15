import Button from './markdown-button';
import layout from '../templates/components/markdown-h3';

export default Button.extend({
  layout,
  precede: '### ',
  succeed: ''
});
