import { Injectable, Inject, Optional } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/of';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import {Storage} from '@ionic/storage';
import {PropertyResource} from './models/PropertyResource';
import {Base} from './base';
import { Headers, URLSearchParams, RequestOptions, Response }                    from '@angular/http';
import { BASE_PATH } from './variables';
/*
  Generated class for the Properties provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Properties extends Base {

  constructor( public http: Http, storage: Storage, @Inject(BASE_PATH) @Optional() basePath: string) {
    super(storage, basePath, 'properties');
  }

  get(): Observable<PropertyResource> {
    return this.http.get(this.getCallPath());
  }
  
  post(): Observable<Response> {
    return this.loadRequestOptions()
      .flatMap((requestOptions: RequestOptions) => this.http.post(this.getCallPath(), requestOptions));
  }
  
}
