import { Component, ViewChild } from '@angular/core';
import { Tabs, NavController } from 'ionic-angular';
import { RentSearchPage } from '../rent-search/rent-search';
import { RentAlertsPage } from '../rent-alerts/rent-alerts';
import { RentFavoritesPage } from '../rent-favorites/rent-favorites';
import { RentSettingsPage } from '../rent-settings/rent-settings';
import {PlatformDetails} from '../../providers/platform-details';

@Component({
  templateUrl: 'rent-tabs.html'
})
export class RentTabsPage {

  @ViewChild('mainRentTabs') mainRentTabs: Tabs;


  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = RentSearchPage;
  tab2Root: any = RentAlertsPage;
  tab3Root: any = RentFavoritesPage;
  tab4Root: any = RentSettingsPage;
  constructor(public platformDetails: PlatformDetails, public navCtrl: NavController) {

  }


  ionViewDidLoad() {
    this.mainRentTabs.ionChange.subscribe((something, error) => {
      console.log(error);
    })
  }

}
