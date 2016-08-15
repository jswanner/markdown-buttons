import Button from './marked-down-button';
import layout from '../templates/components/marked-down-code';

export default Button.extend({
  layout,
  precede: '`',
  succeed: '`'
});
