import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RentTabsPage } from '../rent-tabs/rent-tabs';
import { LandlordTabsPage } from '../landlord-tabs/landlord-tabs';
/*
  Generated class for the Splash page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-splash',
  templateUrl: 'splash.html'
})
export class SplashPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
  }

  findARental() {
    this.navCtrl.setRoot(RentTabsPage);
  }

  listARental() {
    this.navCtrl.setRoot(LandlordTabsPage);
  }
}
