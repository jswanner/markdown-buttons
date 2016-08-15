import Button from './markdown-button';
import layout from '../templates/components/markdown-link';

export default Button.extend({
  layout,
  precede: '[',
  succeed: '](url)'
});
