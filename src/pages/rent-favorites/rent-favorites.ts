import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import {Auth} from '../../providers/auth';
import {PangoUiUtils} from '../../providers/pango-ui-utils';
import {LoginPage} from '../login/login';
import {RentFavoritesContactedPage} from '../rent-favorites-contacted/rent-favorites-contacted';
import {RentFavoritesSavedPage} from '../rent-favorites-saved/rent-favorites-saved';
import {RentFavoritesOnHoldPage} from '../rent-favorites-on-hold/rent-favorites-on-hold';
import {AbstractProtectedPage} from '../abstract-protected';
/*
  Generated class for the RentFavorites page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-rent-favorites',
  templateUrl: 'rent-favorites.html'
})
export class RentFavoritesPage extends AbstractProtectedPage {

  tab1Root;
  tab2Root;
  tab3Root;
  
  constructor(navCtrl: NavController, auth: Auth, modalCtrl: ModalController, uiUtils: PangoUiUtils) {
    super(navCtrl, auth, modalCtrl, uiUtils);
  }

  ionViewDidLoad() {
    
  }

  initProtected() {
    this.tab1Root = RentFavoritesSavedPage;
    this.tab2Root = RentFavoritesContactedPage;
    this.tab3Root = RentFavoritesOnHoldPage;
  }

}
