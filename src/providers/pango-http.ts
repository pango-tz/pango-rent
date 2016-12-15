import { Injectable, Inject, Optional } from '@angular/core';
import { Http, Headers, URLSearchParams, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import {STORAGE_GLOBALS} from './constants';
import {Storage} from '@ionic/storage';
import { BASE_PATH } from './variables';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/observable/of';

/*
  Generated class for the PangoHttp provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
export interface HeaderReference {
    userToken: string; 
    userReferenceId: string;
}

@Injectable()
export class PangoHttp {

  private userToken: string;
  private userReferenceId: string;

  constructor(private storage: Storage, private http: Http, @Inject(BASE_PATH) @Optional() private basePath: string) {
    
  }

  private getPath(path: string) {
    return `${this.basePath}/${path}`;
  }

  public post(path: string, body: any, isProtected: boolean = true): Observable<Response> {
    return this.getRequestOptions(isProtected)
      .flatMap((requestOptions: RequestOptions) => {
        return this.http.post(this.getPath(path), body, requestOptions);
      });
    
  }

  public get(path: string, searchParams: any = null, isProtected: boolean = true): Observable<Response> {
    return this.getRequestOptions(isProtected)
      .flatMap((requestOptions: RequestOptions) => {
        if (searchParams) {
          requestOptions.search = this.getSearchParams(searchParams);
        }
        return this.http.get(this.getPath(path),requestOptions);
      });
  }

  public put(path: string, body: any, isProtected: boolean = true): Observable<Response> {
    return this.getRequestOptions(isProtected)
      .flatMap((requestOptions: RequestOptions) => {
        return this.http.put(path, body, requestOptions);
      });
  }

  private getRequestOptions(isProtected: boolean): Observable<RequestOptions> {
    return isProtected? this.loadProtectedRequestOptions() : this.loadRequestOptions();
  }

  private getSearchParams(params: any) {
    let searchParams = new URLSearchParams();

    for (var key in params) {
      if (params.hasOwnProperty(key)) {
        searchParams.set(key.toString(), params[key].toString());
      }
    }
    
    return searchParams;
  }

  private loadRequestOptions(): Observable<RequestOptions> {
    return Observable.fromPromise(
      this.setHeaders()
        .then(this.setRequestOptions)
    );
  }

  private loadProtectedRequestOptions(): Observable<RequestOptions> {
    return Observable.fromPromise(
      this.loadUserToken()
      .then(this.loadUserReferenceId)
      .then(this.setHeaders)
      .then(this.setProtectedHeaders)
      .then(this.setRequestOptions)
    );
  }

  private setHeaders(): Promise<Headers> {
    let headers = new Headers({
        Accept: 'application/json',
        ContentType : 'application/json'
    });

    return Observable.of(headers).toPromise();
  }

  private setRequestOptions(headers: Headers): Promise<RequestOptions> {
      return new Promise<RequestOptions>((resolve, reject) => {
          return resolve(new RequestOptions({headers: headers}));
      });
  }

  private setProtectedHeaders(headers: Headers): Promise<Headers> {
      return new Promise<Headers>((resolve, reject) => {
            let userToken = this.userToken;
            let userReferenceId = this.userReferenceId;

            let headers = new Headers({ 'Content-Type': 'application/json' }); // https://github.com/angular/angular/issues/6845

            // verify required parameter 'userToken' is not null or undefined
            if (userToken === null || userToken === undefined) {
                reject(new Error('Required parameter userToken was null or undefined when calling API.'))
            }
            // verify required parameter 'userReferenceId' is not null or undefined
            if (userReferenceId === null || userReferenceId === undefined) {
                reject( new Error('Required parameter userReferenceId was null or undefined when calling API.'));
            }

            headers.set('user-token', userToken);
            headers.set('userReferenceId', userReferenceId);

            resolve(headers);
        });
  }
  private loadUserToken(): Promise<string> {
      return this.storage.get(STORAGE_GLOBALS.USER_TOKEN).then((userToken) => {
        this.userToken = userToken;
      });
  }

  private loadUserReferenceId(): Promise<HeaderReference> {
      return this.storage.get(STORAGE_GLOBALS.USER_REFERENCE_ID).then((userReferenceId) => {
          this.userReferenceId = userReferenceId;
      });
  }
}
