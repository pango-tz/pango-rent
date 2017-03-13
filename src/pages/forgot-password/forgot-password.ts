import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {RegistrationService} from "../../providers/registration";
import {SignupPage} from "../signup/signup";

@Component({
  selector: 'page-forgot-password',
  templateUrl: 'forgot-password.html'
})
export class ForgotPasswordPage {

  pageInstructions: string = 'We can email a password reminder to:';
  emailAddress: string = '';

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public registrationService: RegistrationService) {
    // Retrieve the email address from local storage and mask it.
    registrationService.getUserEmailAddressMasked().subscribe((emailAddress: string) => {
      if (emailAddress) {
        this.emailAddress = emailAddress;
      } else {
        this.emailAddress = 'Your email address could not be found.';
      }

    }, (error: Error) => {
      this.emailAddress = 'Your email address could not be found.';
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgotPasswordPage');
  }

  sendReminderEmail() {

  }

  goToCreateNewAccount() {
    this.navCtrl.setRoot(SignupPage);
  }
}
