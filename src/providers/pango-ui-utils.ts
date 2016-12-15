import { Injectable } from '@angular/core';
import {LoadingController, Loading} from 'ionic-angular';
import 'rxjs/add/operator/map';

/*
  Generated class for the PangoUtils provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class PangoUiUtils {
  loader: Loading
  constructor(public loadingCtrl: LoadingController) {
      this.createLoader();
  }
  
  createLoader() {
    this.loader = this.loadingCtrl.create({
        spinner: 'dots',
        showBackdrop: false,
        dismissOnPageChange: true
      });
  }

  showLoader() {
    this.hideLoader();
    this.loader.present();
  }

  hideLoader() {
    this.loader.dismiss();
  }
}
