import { Injectable } from '@angular/core';
import {LoadingController, Loading, NavController, ModalController} from 'ionic-angular';

import 'rxjs/add/operator/map';
/*
  Generated class for the PangoUtils provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class PangoUiUtils {
  public loader: Loading

  constructor(public loadingCtrl: LoadingController, public modalCtrl: ModalController) {
  }

  private createLoader() {
    this.loader = this.loadingCtrl.create({
        spinner: 'dots',
        showBackdrop: true
      });
  }

  presentLoginModal(navCtrl: NavController, LoginPage: any) {
      let loginModal  = this.modalCtrl.create(LoginPage, {loginMessage: LoginPage.loginErrorMessage}, {enableBackdropDismiss: false});
      
      loginModal.onDidDismiss( data => {
        
        if (data === null) {
          console.log(data);
          navCtrl.parent.select(0);
        }
      });

      loginModal.present();
  }

  showLoader() {
    this.hideLoader();
    this.createLoader();
    this.loader.present();
  }

  hideLoader() {
    if (this.loader){
      this.loader.dismiss();
    }
  }
}
