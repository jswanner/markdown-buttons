import Button from './marked-down-button';
import layout from '../templates/components/marked-down-italic';

export default Button.extend({
  layout,
  precede: '_',
  succeed: '_'
});
