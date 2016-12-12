import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {RentFavoritesContactedPage} from '../rent-favorites-contacted/rent-favorites-contacted';
import {RentFavoritesFavoritesPage} from '../rent-favorites-favorites/rent-favorites-favorites';
import {RentFavoritesOnHoldPage} from '../rent-favorites-on-hold/rent-favorites-on-hold';
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

  tab1Root = RentFavoritesFavoritesPage;
  tab2Root = RentFavoritesContactedPage;
  tab3Root = RentFavoritesOnHoldPage;
  
  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello RentFavoritesPage Page');
  }

}