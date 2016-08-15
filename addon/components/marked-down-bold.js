import Button from './marked-down-button';
import layout from '../templates/components/marked-down-bold';

export default Button.extend({
  layout,
  precede: '**',
  succeed: '**'
});
