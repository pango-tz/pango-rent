import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the RentFavoritesFavorites page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-rent-favorites-saved',
  templateUrl: 'rent-favorites-saved.html'
})
export class RentFavoritesSavedPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello RentFavoritesFavoritesPage Page');
  }

}
