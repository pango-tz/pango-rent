import {Inject, Injectable, Optional} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import {UserResource} from './models/UserResource';
import {PangoHttp} from './pango-http';
import {Response, ResponseContentType} from '@angular/http';
import {RegistrationResponse} from './models/RegistrationResponse';

import {Storage} from '@ionic/storage';
import {STORAGE_GLOBALS} from './constants';
import {ConfirmAccountResponse} from "./models/ConfirmAccountResponse";

@Injectable()
export class RegistrationService {

  constructor(public pangoHttp: PangoHttp, private storage: Storage) {

  }

  register(userResource: UserResource): Observable<RegistrationResponse> {
    return this.pangoHttp.post('users', userResource, false)
      .map((response: Response) => {
        console.log(response.json());

        let registrationResponse = <RegistrationResponse> {user: null, error: null};

        if (response.status === 201) {
          // The user successfully created.
          registrationResponse.user = response.json();

          // Update the local storage to set the USER_REGISTERED_DATE value.
          this.storage.set(STORAGE_GLOBALS.USER_REGISTERED_DATE, new Date());
          this.storage.set(STORAGE_GLOBALS.USER_REGISTERED_EMAIL, userResource.emailAddress.trim());

        } else {
          // There was some kind of error.
          // Return the posted object plus the errors.
          registrationResponse.user = userResource;
          registrationResponse.error = response.json();
        }

        return registrationResponse;
      });
  }

  verifyAccount(verificationToken: string): Observable<ConfirmAccountResponse> {
    let url = `account-verification/${verificationToken}`;
    return this.pangoHttp.get(url, null, false)
      .map((response: Response) => {
        console.log(response.json());

        let confirmAccountResponse = <ConfirmAccountResponse> {accountConfirmed: false, error: null};

        if (response.status === 200) {
          // The user successfully confirmed their account.
          confirmAccountResponse.accountConfirmed = true;
        } else {
          // There was some kind of error.
          confirmAccountResponse.error = response.json();
        }

        return confirmAccountResponse;
      });

  }

  /**
   * This method looks at the registration date stored in local storage. If present then
   * that indicates the user is registered.
   */
  isUserRegistered(): Observable<boolean> {
    return Observable.fromPromise(
      this.storage.get(STORAGE_GLOBALS.USER_REGISTERED_DATE).then(date => !!date)
    );

  }

  getRegistrationDate(): Observable<string> {
    return Observable.fromPromise(
      this.storage.get(STORAGE_GLOBALS.USER_REGISTERED_DATE).then(date => date ? date : 'You have not registered yet!')
    );
  }

  deleteRegistrationDate(): Observable<string> {
    return Observable.fromPromise(
      this.storage.remove(STORAGE_GLOBALS.USER_REGISTERED_DATE).then(date => 'You have not registered yet!')
    );
  }

  saveUserEmailAddress(emailAddress: string) {
    this.storage.set(STORAGE_GLOBALS.USER_REGISTERED_EMAIL, emailAddress.trim());
  }

  getUserEmailAddress(): Observable<string> {
    return Observable.fromPromise(
      this.storage.get(STORAGE_GLOBALS.USER_REGISTERED_EMAIL).then(email => email)
    );
  }

  getUserEmailAddressMasked(): Observable<string> {
    return Observable.fromPromise(
      this.storage.get(STORAGE_GLOBALS.USER_REGISTERED_EMAIL).then(email => RegistrationService.maskEmailAddress(email))
    );
  }


  static maskEmailAddress(emailAddress: string) : string {
    let numXes = (emailAddress.indexOf('@') - 3);
    let maskedEmailAddress = emailAddress.substring(numXes, emailAddress.length);
    maskedEmailAddress = "x".repeat(numXes) + maskedEmailAddress;
    return maskedEmailAddress;
  }
}
