import {Component} from '@angular/core';
import {NavController, NavParams, ModalController} from 'ionic-angular';
import {RentSearchPage} from "../rent-search/rent-search";
import {LoginPage} from "../login/login";
import {RegistrationService} from "../../providers/registration";
import {ConfirmAccountResponse} from "../../providers/models/ConfirmAccountResponse";
import {Error} from '../../providers/models/Error';

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
              public registrationService: RegistrationService) {
    this.verificationToken = navParams.get('verificationToken');

    registrationService.verifyAccount(this.verificationToken)
      .subscribe((confirmAccountResponse: ConfirmAccountResponse) => {
        this.verificationMessage = 'Your account has been verified!';
        this.verified = 'verified';
      }, (error: Error) => {
        //todo: plug in the error modal to be developed
        console.log('Account Verification Error > Status: ' + error.status + ', Details: ' + JSON.stringify(error));
        this.verificationMessage = 'There was an error and your account could not be verified!';
        this.verified = 'failed';
      });
  }

  searchPropertiesClicked() {
    this.navCtrl.setRoot(RentSearchPage);
  }

  signIn() {
    let loginModal = this.modalCtrl.create(LoginPage);
    loginModal.present();
  }
}
