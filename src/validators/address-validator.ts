import {AbstractControl} from  '@angular/forms';

export function addressValidator(control: AbstractControl): {[key: string]: any} {

  const ctrlAddressLine1 = control.root.get(['address', 'addressLine1']);
  const ctrlAddressLine2 = control.root.get(['address', 'addressLine2']);
  const ctrlCity = control.root.get(['address', 'city']);
  const ctrlState = control.root.get(['address', 'state']);
  const ctrlZip = control.root.get(['address', 'zip']);
  const ctrlCountry = control.root.get(['address', 'country']);

  if (!ctrlAddressLine1 || !ctrlAddressLine2 || !ctrlCity || !ctrlState || !ctrlZip || !ctrlCountry) {
    console.log('no address controls found in validator.');
    return null;
  }

  console.assert(ctrlAddressLine1 != null, 'ctrlAddressLine1 is null');
  console.assert(ctrlAddressLine2 != null, 'ctrlAddressLine2 is null');
  console.assert(ctrlCity != null, 'ctrlCity is null');
  console.assert(ctrlState != null, 'ctrlState is null');
  console.assert(ctrlZip != null, 'ctrlZip is null');
  console.assert(ctrlCountry != null, 'ctrlCountry is null');

  if ((ctrlAddressLine1.value || ctrlAddressLine2.value || ctrlCity.value || ctrlState.value || ctrlZip.value || ctrlCountry.value) &&
    (!ctrlAddressLine1.value || !ctrlAddressLine2.value || !ctrlCity.value || !ctrlState.value || !ctrlZip.value || !ctrlCountry.value)) {
    return {'addressIncomplete': control}
  }

  return null;
}
