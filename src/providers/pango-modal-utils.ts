import {Injectable} from '@angular/core';
import {ModalController, NavController} from 'ionic-angular';
import 'rxjs/add/operator/map';
import {PangoErrorResource} from "./models/PangoErrorResource";
import {LoginPage} from "../pages/login/login";
import {SystemErrorPage} from "../pages/system-error/system-error";
import {PangoError} from "../components/pango-error/pango-error.component";
import {RentTabsPage} from "../pages/rent-tabs/rent-tabs";

@Injectable()
export class PangoModalUtils {

  constructor(public modalCtrl: ModalController) {
  }

  presentLoginModal(navCtrl: NavController) {
    let loginModal = this.modalCtrl.create(LoginPage, {loginMessage: LoginPage.loginErrorMessage}, {enableBackdropDismiss: false});

    loginModal.onDidDismiss(data => {
      if (data === null) {
        // do nothing, just let the modal close
        // navCtrl.parent.select(0);
      }
    });

    loginModal.present();
  }

  presentSystemErrorModal(navCtrl: NavController, pangoErrorResource: PangoErrorResource) {
    let systemErrorModal = this.modalCtrl.create(PangoError,
      {'pangoErrorResource': pangoErrorResource},
      {enableBackdropDismiss: false});

    systemErrorModal.onDidDismiss(data => {
      if (data && data.followButtonTwoAction) {
        if (data.buttonTwoAction.toLowerCase() === 'login') {
          this.presentLoginModal(navCtrl);
        }
      }
    });

    systemErrorModal.present();
  }
}
