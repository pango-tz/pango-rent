import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { PangoRentApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import {RentTabsPage} from '../pages/rent-tabs/rent-tabs';
import {LandlordTabsPage} from '../pages/landlord-tabs/landlord-tabs';
import {RentSearchPage} from '../pages/rent-search/rent-search';
import {RentSettingsPage} from '../pages/rent-settings/rent-settings';
import {RentAlertsPage} from '../pages/rent-alerts/rent-alerts';
import {RentFavoritesPage} from '../pages/rent-favorites/rent-favorites';
import{ LandlordHomePage } from '../pages/landlord-home/landlord-home';
import{ LandlordSettingsPage } from '../pages/landlord-settings/landlord-settings';
import{ LandlordManagePage } from '../pages/landlord-manage/landlord-manage';

import { SplashPage } from '../pages/splash/splash';

@NgModule({
  declarations: [
    PangoRentApp,
    SplashPage,
    RentTabsPage,
    LandlordTabsPage,
    RentSearchPage,
    RentSettingsPage,
    RentAlertsPage,
    RentFavoritesPage,
    LandlordHomePage,
    LandlordManagePage,
    LandlordSettingsPage
  ],
  imports: [
    IonicModule.forRoot(PangoRentApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    PangoRentApp,
    SplashPage,
    RentTabsPage,
    LandlordTabsPage,
    RentSearchPage,
    RentSettingsPage,
    RentAlertsPage,
    RentFavoritesPage,
    LandlordHomePage,
    LandlordManagePage,
    LandlordSettingsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
