import Button from './markdown-button';
import layout from '../templates/components/markdown-h6';

export default Button.extend({
  layout,
  precede: '###### ',
  succeed: ''
});
