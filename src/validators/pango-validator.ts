import {emailValidator} from './email-validator';
import {confirmPasswordValidator} from './confirm-password-validator';
import {addressValidator} from './address-validator';

export const PangoValidators = {
  email: emailValidator,
  confirmPassword: confirmPasswordValidator,
  address: addressValidator
};
