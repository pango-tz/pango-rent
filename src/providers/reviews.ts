import { Injectable, Inject, Optional } from '@angular/core';
import { Http, Headers, URLSearchParams, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import {ReviewResource} from './models/models';
import {Base} from './base';
import { BASE_PATH } from './variables';
import {Storage} from '@ionic/storage';

/*
  Generated class for the Reviews provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Reviews extends Base {

  constructor(public http: Http,  storage: Storage, @Inject(BASE_PATH) @Optional() basePath: string) {
    super(storage, basePath, 'reviews');
  }

}
