import {Injectable} from '@angular/core';
import {ModalController, NavController} from 'ionic-angular';
import 'rxjs/add/operator/map';
import { PangoErrorResource } from "./models/PangoErrorResource";
import { LoginPage } from '../pages/login/login';
import { PangoError } from '../components/pango-error/pango-error.component';
import { SignupPage } from '../pages/signup/signup';
import { ForgotPasswordPage } from '../pages/forgot-password/forgot-password';

@Injectable()
export class PangoModalUtils {

  constructor(public modalCtrl: ModalController) {
  }

  public presentForgotPasswordModal(navCtrl: NavController) {
    let forgotModal = this.modalCtrl.create(ForgotPasswordPage, {}, {enableBackdropDismiss: false});

    forgotModal.present();

    return forgotModal;
  }

  public presentRegistrationModal(navCtrl: NavController) {

    let registrationModal = this.modalCtrl.create(SignupPage, {}, {enableBackdropDismiss: false});

    registrationModal.present();

    return registrationModal;
  }

  public presentLoginModal(navCtrl: NavController) {
    let loginModal = this.modalCtrl.create(LoginPage, {loginMessage: LoginPage.loginErrorMessage}, {enableBackdropDismiss: false});

    loginModal.present();

    return loginModal;
  }

  public presentSystemErrorModal(navCtrl: NavController, pangoErrorResource: PangoErrorResource) {
    let systemErrorModal = this.modalCtrl.create(PangoError,
      {'pangoErrorResource': pangoErrorResource},
      {enableBackdropDismiss: false});

      /*
    systemErrorModal.onDidDismiss(data => {
      if (data && data.followButtonTwoAction) {
        if (data.buttonTwoAction.toLowerCase() === 'login') {
          this.presentLoginModal(navCtrl);
        }
      }
    });
    */
    systemErrorModal.present();

    return systemErrorModal;
  }
}
