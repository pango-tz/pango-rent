import { Http, Headers, RequestOptions }                    from '@angular/http';
import {STORAGE_GLOBALS} from './constants';
import {Storage} from '@ionic/storage';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/fromPromise';

export interface HeaderReference {
    userToken: string; 
    userReferenceId: string;
}

export abstract class Base {


    constructor(private storage: Storage, private basePath: string,  private path: string) { }
    
    protected getCallPath() {
        return `${this.basePath}/${this.path}`;
    }

    protected loadRequestOptions(): Observable<RequestOptions> {
        
        return Observable.fromPromise(
                this.loadUserToken()
                .then(this.loadUserReferenceIdAfterLoadUserToken)
                .then(this.setHeaders)
                .then(this.setRequestOptions)
            );
        
    }

    private setRequestOptions(headers: Headers) {
        return new Promise<RequestOptions>((resolve, reject) => {
            resolve(new RequestOptions({headers: headers}));
        });
    }

    private setHeaders(headerReference: HeaderReference): Promise<Headers> {
        
        return new Promise<Headers>((resolve, reject) => {
            let userToken = headerReference.userToken;
            let userReferenceId = headerReference.userReferenceId;

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
        return this.storage.get(STORAGE_GLOBALS.USER_TOKEN).then((userToken) => userToken);
    }

    private loadUserReferenceIdAfterLoadUserToken(userToken: string): Promise<HeaderReference> {
        return this.storage.get(STORAGE_GLOBALS.USER_REFERENCE_ID).then((userReferenceId) => {
            return {
                userReferenceId: userReferenceId,
                userToken: userToken
            }
        });
    }
}