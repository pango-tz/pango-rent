import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the LandlordHome page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-landlord-home',
  templateUrl: 'landlord-home.html'
})
export class LandlordHomePage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello LandlordHomePage Page');
  }

}
