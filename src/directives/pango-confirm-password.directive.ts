import {Directive, Attribute} from '@angular/core';
import {NG_VALIDATORS, Validator, AbstractControl} from '@angular/forms';
import {PangoValidators} from '../validators/pango-validator';

@Directive({
  selector: '[pangoConfirmPassword]',
  providers: [{provide: NG_VALIDATORS, useExisting: PangoConfirmPasswordValidatorDirective, multi: true}]
})
export class PangoConfirmPasswordValidatorDirective implements Validator {

  constructor(@Attribute('compareTo') public compareTo: string) {
  }

  validate(control: AbstractControl): {[key: string]: any} {
    return PangoValidators.confirmPassword(control, this.compareTo);
  }
}
