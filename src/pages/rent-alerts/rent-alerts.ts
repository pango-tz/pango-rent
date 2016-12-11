import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

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

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello RentAlertsPage Page');
  }

}
