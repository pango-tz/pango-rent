import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {PlatformDetails} from './platform-details';
import {PangoUiUtils} from './pango-ui-utils';
import {IonicModule} from 'ionic-angular';
import {PangoHttp} from './pango-http';
import {BASE_PATH} from './variables';
import {Auth} from './auth';
import {RegistrationService} from './registration';
import {Properties} from './properties';

import {AuthHttp, AuthConfig} from 'angular2-jwt';
import {Http} from '@angular/http';
import {Storage} from '@ionic/storage';
import {STORAGE_GLOBALS} from './constants';
import {PangoModalUtils} from "./pango-modal-utils";
import {LoginFlowHandler} from './login-flow-handler';
import { ErrorModalUtils } from './error-modal-utils';
let storage = new Storage();

export function getAuthHttp(http) {
  return new AuthHttp(new AuthConfig({
    headerName: 'user-token',
    tokenName: STORAGE_GLOBALS.USER_TOKEN,
    headerPrefix: '',
    noJwtError: true,
    globalHeaders: [{'Accept': 'application/json'}, {'Content-Type': 'application/json'}],
    tokenGetter: (() => storage.get(STORAGE_GLOBALS.USER_TOKEN)),
  }), http);
}


@NgModule({
  imports: [HttpModule, IonicModule, FormsModule],
  providers: [
    PlatformDetails,
    PangoUiUtils,
    PangoModalUtils,
    PangoHttp,
    Auth,
    ErrorModalUtils,
    LoginFlowHandler,
    Properties,
    RegistrationService,
    {provide: BASE_PATH, useValue: 'http://dev.pango-apis.com/apis/v1'},
    {
      provide: AuthHttp,
      useFactory: getAuthHttp,
      deps: [Http]
    },
  ]
})
export class PangoProvidersModule {
}
