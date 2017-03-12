import {Component} from '@angular/core';
import {NavController, NavParams, ModalController} from 'ionic-angular';
import {RentSearchPage} from "../rent-search/rent-search";
import {LoginPage} from "../login/login";
import {RegistrationService} from "../../providers/registration";
import {ConfirmAccountResponse} from "../../providers/models/ConfirmAccountResponse";
import {Error} from '../../providers/models/Error';
import {PangoModalUtils} from "../../providers/pango-modal-utils";

@Component({
  selector: 'page-account-verification',
  templateUrl: 'account-verification.html'
})
export class AccountVerificationPage {
  verificationToken: string;
  verificationMessage: string = 'Please wait while we verify your account...';
  verified: string = 'inprogress';

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private modalCtrl: ModalController,
              public registrationService: RegistrationService,
              public pangoModalUtils: PangoModalUtils) {
    this.verificationToken = navParams.get('verificationToken');

    registrationService.verifyAccount(this.verificationToken)
      .subscribe((confirmAccountResponse: ConfirmAccountResponse) => {
        this.verificationMessage = 'Your account has been verified!';
        this.verified = 'verified';
      }, (error: Error) => {
        this.showSystemError('There was an error and your account could not be verified!', null, null, null);
      });
  }

  showSystemError(errorMessage: string, buttonTwoText: string, buttonTwoAction: string, payload: any) {
    let systemError = {
      'navBarTitle': 'Create an Account',
      'navBarBackText': 'Close',
      'errorMessage': errorMessage,
      'buttonOneText': 'GO BACK',
      'buttonTwoText': buttonTwoText,
      'buttonTwoAction': buttonTwoAction,
      'payload': payload
    };

    this.pangoModalUtils.presentSystemErrorModal(this.navCtrl, systemError);
  }

  searchPropertiesClicked() {
    this.navCtrl.setRoot(RentSearchPage);
  }

  signIn() {
    let loginModal = this.modalCtrl.create(LoginPage);
    loginModal.present();
  }
}
