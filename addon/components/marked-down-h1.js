import Button from './marked-down-button';
import layout from '../templates/components/marked-down-h1';

export default Button.extend({
  layout,
  precede: '# ',
  succeed: ''
});
