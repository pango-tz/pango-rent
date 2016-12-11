import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the RentSettings page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-rent-settings',
  templateUrl: 'rent-settings.html'
})
export class RentSettingsPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello RentSettingsPage Page');
  }

}
