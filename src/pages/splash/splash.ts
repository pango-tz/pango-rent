import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { Auth } from '../../providers/auth';
import { PangoUiUtils } from '../../providers/pango-ui-utils';
import { RentTabsPage } from '../rent-tabs/rent-tabs';
import { LandlordTabsPage } from '../landlord-tabs/landlord-tabs';
import {LoginPage} from '../login/login';
import {PangoModalUtils} from "../../providers/pango-modal-utils";
import {LoginFlowHandler} from "../../providers/login-flow-handler";
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

  constructor(public navCtrl: NavController, public auth: Auth, public modalUtils: PangoModalUtils, public loginFlow: LoginFlowHandler) {}

  ionViewDidLoad() {
  }

  findARental() {
    this.navCtrl.push(RentTabsPage);
  }

  openLandLordPage() {
    this.navCtrl.push(LandlordTabsPage);
  }

  listARental() {

    this.auth.isLoggedIn().subscribe((loggedIn: boolean) => {
      if (loggedIn) {
        this.openLandLordPage();
      } else {
        console.log("can't go there cause we are not logged in");
        this.loginFlow.showLoginModal(this.navCtrl, (data) => {
          if (data != null) {
            this.openLandLordPage();
          }
        })
      }
    })

  }
}
