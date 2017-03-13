import {Component} from '@angular/core';
import { NavController} from 'ionic-angular';
import {RentTabsPage} from "../../pages/rent-tabs/rent-tabs";

@Component({
  selector: 'create-account-navbar',
  templateUrl: 'create-account-navbar.html'
})
export class CreateAccountNavbar {

  constructor (public navCtrl: NavController) {
  }

  cancel() {
    this.navCtrl.setRoot(RentTabsPage)
  }
}
