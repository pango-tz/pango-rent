import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import {LoginResource} from './models/LoginResource';
import {PangoHttp} from './pango-http';
import {Response} from '@angular/http';
import {LoginResponse} from './models/models';
/*
  Generated class for the Login provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Auth {
  private loggedIn: boolean = false;

  constructor(public pangoHttp: PangoHttp) {
    
  }

  login(loginResource: LoginResource): Observable<LoginResponse> {
    return this.pangoHttp.post('authenticate', loginResource, false)
      .map((response: Response) => {
        return <LoginResponse> response.json();
      });
  }
  
  public isLoggedIn(): boolean {
    return this.loggedIn;
  }
}
