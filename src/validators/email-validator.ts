import { AbstractControl} from  '@angular/forms';

export const emailRegEx =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export function emailValidator(control: AbstractControl): {[key: string] : any} {
    const email = control.value;
    const passes = emailRegEx.test(email);
    return passes ? null : {'improperEmail': {email}};
}