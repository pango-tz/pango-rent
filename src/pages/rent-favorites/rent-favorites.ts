import {Component} from '@angular/core';
import {NavController, ModalController} from 'ionic-angular';
import {Auth} from '../../providers/auth';
import {PangoUiUtils} from '../../providers/pango-ui-utils';
import {RentFavoritesContactedPage} from '../rent-favorites-contacted/rent-favorites-contacted';
import {RentFavoritesSavedPage} from '../rent-favorites-saved/rent-favorites-saved';
import {RentFavoritesOnHoldPage} from '../rent-favorites-on-hold/rent-favorites-on-hold';
import {AbstractProtectedPage} from '../abstract-protected';
import {PangoModalUtils} from "../../providers/pango-modal-utils";

@Component({
  selector: 'page-rent-favorites',
  templateUrl: 'rent-favorites.html'
})
export class RentFavoritesPage extends AbstractProtectedPage {

  tab1Root;
  tab2Root;
  tab3Root;

  constructor(navCtrl: NavController,
              auth: Auth,
              modalCtrl: ModalController,
              uiUtils: PangoUiUtils,
              modalUtils: PangoModalUtils) {
    super(navCtrl, auth, modalCtrl, uiUtils, modalUtils);
  }

  ionViewDidLoad() {

  }

  initProtected() {
    this.tab1Root = RentFavoritesSavedPage;
    this.tab2Root = RentFavoritesContactedPage;
    this.tab3Root = RentFavoritesOnHoldPage;
  }

}
