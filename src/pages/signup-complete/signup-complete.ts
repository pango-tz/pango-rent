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

    // Retrieve the email address from local storage.
    registrationService.getUserEmailAddress().subscribe((emailAddress: string) => {

      if (emailAddress) {
        // Mask the email address.
        let numXes = (emailAddress.indexOf('@') - 3);
        this.emailAddress = emailAddress.substring(numXes, emailAddress.length);
        this.emailAddress = "x".repeat(numXes) + this.emailAddress;
      } else {
        this.emailAddress = 'Your email address could not be found.';
      }

    }, (error: Error) => {
      this.emailAddress = 'Your email address could not be found.';
    });
  }

  searchPropertiesClicked() {
    this.navCtrl.setRoot(RentSearchPage);
  }
}
