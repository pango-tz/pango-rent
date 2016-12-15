import { Injectable } from '@angular/core';
import {Platform} from 'ionic-angular'
/*
  Generated class for the PlatformDetails provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class PlatformDetails {

  private isMobilePhone: boolean;

  constructor(private platform: Platform) {
    this.isMobilePhone = platform.is('mobileweb') || platform.is('mobileDevice') || (platform.is('android') && !platform.is('tablet') )|| platform.is('iphone');
  }

  isMobilePhoneDevice() {
    return this.isMobilePhone;
  }

}
