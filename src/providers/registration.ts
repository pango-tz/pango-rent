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

        } else {
          // There was some kind of error.
          // Return the posted object plus the errors.
          registrationResponse.user = userResource;
          registrationResponse.error = response.json();
        }

        return registrationResponse;
      });
  }

  getRegistrationDate(): Observable<string> {
    return Observable.fromPromise(
      this.storage.get(STORAGE_GLOBALS.USER_REGISTERED_DATE).then(date => date ? date : 'You have not registered yet!')
    );
  }
}
