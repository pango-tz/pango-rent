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

  searchPropertiesClicked() {
    this.navCtrl.setRoot(RentSearchPage);
  }

  notImplemented() {
    alert('This feature is not yet implemented.');
  }
}
