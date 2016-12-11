import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the LandlordSettings page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-landlord-settings',
  templateUrl: 'landlord-settings.html'
})
export class LandlordSettingsPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello LandlordSettingsPage Page');
  }

}
