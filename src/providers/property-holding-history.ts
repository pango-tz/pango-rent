import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the PropertyHoldingHistory provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class PropertyHoldingHistory {

  constructor(public http: Http) {
    console.log('Hello PropertyHoldingHistory Provider');
  }

}
