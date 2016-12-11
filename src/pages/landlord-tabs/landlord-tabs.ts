import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import{ LandlordHomePage } from '../landlord-home/landlord-home';
import{ LandlordSettingsPage } from '../landlord-settings/landlord-settings';
import{ LandlordManagePage } from '../landlord-manage/landlord-manage';
@Component({
  templateUrl: 'landlord-tabs.html'
})
export class LandlordTabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = LandlordHomePage;
  tab2Root: any = LandlordManagePage;
  tab3Root: any = LandlordSettingsPage;

  constructor(public platform: Platform) {

  }
}
