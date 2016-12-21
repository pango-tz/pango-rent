import {Directive} from '@angular/core';
import {NG_VALIDATORS, Validator, AbstractControl} from '@angular/forms';
import { PangoValidators } from '../validators/pango-validator';

@Directive({
    selector: '[pangoEmail]',
    providers: [{provide: NG_VALIDATORS, useExisting: PangoEmailValidatorDirective, multi: true}]
})
export class PangoEmailValidatorDirective implements Validator {

    validate(control: AbstractControl): {[key: string]: any} {
        return PangoValidators.email(control);
    }
}