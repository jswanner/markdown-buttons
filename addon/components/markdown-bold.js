import Button from './markdown-button';
import layout from '../templates/components/markdown-bold';

export default Button.extend({
  layout,
  precede: '**',
  succeed: '**'
});
