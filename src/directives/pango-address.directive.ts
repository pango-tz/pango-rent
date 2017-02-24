import {Directive} from '@angular/core';
import {NG_VALIDATORS, Validator, AbstractControl} from '@angular/forms';
import {PangoValidators} from '../validators/pango-validator';

@Directive({
  selector: '[pangoAddress]',
  providers: [{provide: NG_VALIDATORS, useExisting: PangoAddressValidatorDirective, multi: true}]
})
export class PangoAddressValidatorDirective implements Validator {

  validate(control: AbstractControl): {[key: string]: any} {
    return PangoValidators.address(control);
  }
}
