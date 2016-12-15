import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import {PropertyResource, PropertySearchCriteria} from './models/models';
import { Response }                    from '@angular/http';

import {PangoHttp} from './pango-http';
/*
  Generated class for the Properties provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Properties {

  static longitude: number;
  static latitude: number;

  constructor( private pangoHttp: PangoHttp) {
    
  }

  get(propertySearchCriteria: PropertySearchCriteria): Observable<PropertyResource[]> {
    return this.pangoHttp.get('properties', propertySearchCriteria, false)
      .map((response: Response) => {
        return <PropertyResource[]> response.json()
      });
  }
  
  
}
