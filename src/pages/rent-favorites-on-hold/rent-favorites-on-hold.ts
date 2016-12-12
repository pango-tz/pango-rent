import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the RentFavoritesOnHold page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-rent-favorites-on-hold',
  templateUrl: 'rent-favorites-on-hold.html'
})
export class RentFavoritesOnHoldPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello RentFavoritesOnHoldPage Page');
  }

}
