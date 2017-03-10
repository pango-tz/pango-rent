import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {RentSearchPage} from "../rent-search/rent-search";
import {RegistrationService} from "../../providers/registration";


@Component({
  selector: 'page-signup-complete',
  templateUrl: 'signup-complete.html'
})
export class SignupCompletePage {

  emailAddress: string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public registrationService: RegistrationService) {

    // Retrieve the email address from local storage and mask it.
    registrationService.getUserEmailAddress().subscribe((emailAddress: string) => {
      if (emailAddress) {
        this.emailAddress = SignupCompletePage.maskEmailAddress(emailAddress);
      } else {
        this.emailAddress = 'Your email address could not be found.';
      }

    }, (error: Error) => {
      this.emailAddress = 'Your email address could not be found.';
    });
  }

  static maskEmailAddress(emailAddress: string) : string {
    let maskedEmailAddress = '';
    let numXes = (emailAddress.indexOf('@') - 3);
    maskedEmailAddress = emailAddress.substring(numXes, emailAddress.length);
    maskedEmailAddress = "x".repeat(numXes) + maskedEmailAddress;
    return maskedEmailAddress;
  }

  searchPropertiesClicked() {
    this.navCtrl.setRoot(RentSearchPage);
  }

  notImplemented() {
    alert('This feature is not yet implemented.');
  }
}
