import {Injectable} from '@angular/core';
import {ModalController, NavController} from 'ionic-angular';
import 'rxjs/add/operator/map';
import {PangoErrorResource} from "./models/PangoErrorResource";
import {LoginPage} from "../pages/login/login";
import {SystemErrorPage} from "../pages/system-error/system-error";

@Injectable()
export class PangoModalUtils {

  constructor(public modalCtrl: ModalController) {
  }

  presentLoginModal(navCtrl: NavController) {
    let loginModal = this.modalCtrl.create(LoginPage, {loginMessage: LoginPage.loginErrorMessage}, {enableBackdropDismiss: false});

    loginModal.onDidDismiss(data => {
      if (data === null) {
        navCtrl.parent.select(0);
      }
    });

    loginModal.present();
  }

  presentSystemErrorModal(navCtrl: NavController, pangoErrorResource: PangoErrorResource) {
    let systemErrorModal = this.modalCtrl.create(SystemErrorPage,
      {'pangoErrorResource': pangoErrorResource},
      {enableBackdropDismiss: false});

    systemErrorModal.onDidDismiss(data => {
      if (data === null || !data.followButtonTwoAction) {
        navCtrl.parent.select(0);
      } else {
        if (data.buttonTwoAction.toLowerCase() === 'login') {
          this.presentLoginModal(navCtrl);
        }
      }
    });

    systemErrorModal.present();
  }
}
