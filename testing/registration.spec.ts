import {inject} from '../node_modules/@angular/core/testing';
import {RegistrationService} from '../src/providers/registration';
import {UserResource} from '../src/providers/models/UserResource';
import {RegistrationResponse} from '../src/providers/models/RegistrationResponse';

describe('failed registration', function () {

  beforeEach(() => {
    // addProviders([RegistrationService]);  // addProviders doesn't exist in /core/testing
    this.user = <UserResource>{};
  });


  it('reg attempt', inject([RegistrationService], (service: RegistrationService) => {
    var response = service.register(this.user);
    // expect().toBeFalsy();
  }));
});
