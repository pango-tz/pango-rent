import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the RentFavoritesContacted page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-rent-favorites-contacted',
  templateUrl: 'rent-favorites-contacted.html'
})
export class RentFavoritesContactedPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello RentFavoritesContactedPage Page');
  }

}
