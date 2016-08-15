import Button from './markdown-button';
import layout from '../templates/components/markdown-code';

export default Button.extend({
  layout,
  precede: '`',
  succeed: '`'
});
