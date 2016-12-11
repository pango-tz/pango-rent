import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { RentSearchPage } from '../rent-search/rent-search';
import { RentAlertsPage } from '../rent-alerts/rent-alerts';
import { RentFavoritesPage } from '../rent-favorites/rent-favorites';
import { RentSettingsPage } from '../rent-settings/rent-settings';

@Component({
  templateUrl: 'rent-tabs.html'
})
export class RentTabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = RentSearchPage;
  tab2Root: any = RentAlertsPage;
  tab3Root: any = RentFavoritesPage;
  tab4Root: any = RentSettingsPage
  constructor(public platform: Platform) {
    
  }
}
