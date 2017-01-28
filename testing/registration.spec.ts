import { inject } from '../node_modules/@angular/core/testing';
import { Registration } from '../src/providers/registration';
import { UserResource } from '../src/providers/models/UserResource';
import { RegistrationResponse } from '../src/providers/models/RegistrationResponse';

describe('failed registration', function () {

  beforeEach(() => {
    // addProviders([Registration]);  // addProviders doesn't exist in /core/testing
    this.user = <UserResource>{};
  });


  it('reg attempt', inject([Registration], (service: Registration) => {
    var response = service.register(this.user);
    // expect().toBeFalsy();
  }));
});
