import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the RentFavorites page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-rent-favorites',
  templateUrl: 'rent-favorites.html'
})
export class RentFavoritesPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello RentFavoritesPage Page');
  }

}
