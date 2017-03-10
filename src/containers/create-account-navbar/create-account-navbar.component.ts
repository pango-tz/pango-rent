import {Component} from '@angular/core';
import { NavController} from 'ionic-angular';
import {RentSearchPage} from "../../pages/rent-search/rent-search";

@Component({
  selector: 'create-account-navbar',
  templateUrl: 'create-account-navbar.html'
})
export class CreateAccountNavbar {

  constructor (public navCtrl: NavController) {
  }

  cancel() {
    this.navCtrl.setRoot(RentSearchPage)
  }
}
