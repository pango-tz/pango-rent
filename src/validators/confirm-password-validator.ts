import {AbstractControl} from  '@angular/forms';

export function confirmPasswordValidator(control: AbstractControl, compareTo: string): {[key: string]: any} {

  let val1 = control.value;
  let ctrl2 = control.root.get(compareTo);

  if (val1 && ctrl2 && ctrl2.value && val1 !== ctrl2.value) {
    return {'passwordMismatch': control}
  }

  return null;
}
