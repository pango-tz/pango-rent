import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import {Auth} from '../../providers/auth';
import {PangoUiUtils} from '../../providers/pango-ui-utils';
import {LoginPage} from '../login/login';
/*
  Generated class for the RentAlerts page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-rent-alerts',
  templateUrl: 'rent-alerts.html'
})
export class RentAlertsPage {

  constructor(public navCtrl: NavController, private auth: Auth, private modalCtrl: ModalController, private uiUtils: PangoUiUtils) {

    
    
  }

  ionViewWillEnter() {

    this.auth.isLoggedIn().
      subscribe((loggedIn: boolean) => {
        console.log("Is logged in", loggedIn);
        if (!loggedIn) {
          this.uiUtils.presentLoginModal(this.navCtrl, LoginPage);
        }
      });
  }

  ionViewDidLoad() {
    console.log('Hello RentAlertsPage Page');
  }

  ionViewCanEnter(): boolean{
   // here we can either return true or false
   // depending on if we want to leave this view
   return true;
  }
}
