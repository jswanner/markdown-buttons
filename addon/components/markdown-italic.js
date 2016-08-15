import Button from './markdown-button';
import layout from '../templates/components/markdown-italic';

export default Button.extend({
  layout,
  precede: '_',
  succeed: '_'
});
