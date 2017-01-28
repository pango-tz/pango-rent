import {Inject, Injectable, Optional} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import {UserResource} from './models/UserResource';
import {PangoHttp} from './pango-http';
import {Response, ResponseContentType} from '@angular/http';
import {RegistrationResponse} from './models/RegistrationResponse';

// todo: do i need to use storage
// todo: do i need to use tokenNotExpired

@Injectable()
export class Registration {

  constructor(public pangoHttp: PangoHttp) {

  }

  register(userResource: UserResource): Observable<RegistrationResponse> {
    return this.pangoHttp.post('users', userResource, false)
      .map((response: Response) => {
        console.log(response.json());
        let jsonResponse = response.json();
        let registrationResponse = <RegistrationResponse> response.json();
        return registrationResponse;
      });
  }
}
