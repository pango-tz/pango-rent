import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import {LoginResource} from './models/LoginResource';
import {PangoHttp} from './pango-http';
import {Response} from '@angular/http';
import {LoginResponse} from './models/models';
import {Storage} from '@ionic/storage';
import {STORAGE_GLOBALS} from './constants';
import { tokenNotExpired, JwtHelper } from 'angular2-jwt';
/*
  Generated class for the Login provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Auth {
  private static loggedIn: boolean = false;

  constructor(public pangoHttp: PangoHttp, private storage: Storage) {

  }

  login(loginResource: LoginResource): Observable<LoginResponse> {
    return this.pangoHttp.post('authenticate', loginResource, false)
      .map((response: Response) => {
        console.log(response.json());
        let jsonResponse = response.json();
        let loginResponse = <LoginResponse> response.json();
        loginResponse.userToken = jsonResponse['user-token'];
        this.storage.set(STORAGE_GLOBALS.USER_TOKEN, loginResponse.userToken);
        this.storage.set(STORAGE_GLOBALS.USER_REFERENCE_ID, loginResponse.userReferenceId);

        return loginResponse;
      });
  }
  public logOut() {
    this.storage.remove(STORAGE_GLOBALS.USER_TOKEN);
    this.storage.remove(STORAGE_GLOBALS.USER_REFERENCE_ID);
  }

  public isLoggedIn(): Observable<boolean> {
    // TODO: Investigate why this returns false when we have a token.
    return Observable.fromPromise(
      this.storage.get(STORAGE_GLOBALS.USER_TOKEN).then(token => tokenNotExpired(null, token))
    );
  }
}
