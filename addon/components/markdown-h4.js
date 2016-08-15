import Button from './markdown-button';
import layout from '../templates/components/markdown-h4';

export default Button.extend({
  layout,
  precede: '#### ',
  succeed: ''
});
