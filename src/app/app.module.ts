import { NgModule, ErrorHandler } from '@angular/core';
import {HttpModule} from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { PangoRentApp } from './app.component';
import {RentTabsPage} from '../pages/rent-tabs/rent-tabs';
import {LandlordTabsPage} from '../pages/landlord-tabs/landlord-tabs';
import {RentSearchPage} from '../pages/rent-search/rent-search';
import {RentSettingsPage} from '../pages/rent-settings/rent-settings';
import {RentAlertsPage} from '../pages/rent-alerts/rent-alerts';
import {RentFavoritesPage} from '../pages/rent-favorites/rent-favorites';
import{ LandlordHomePage } from '../pages/landlord-home/landlord-home';
import{ LandlordSettingsPage } from '../pages/landlord-settings/landlord-settings';
import{ LandlordManagePage } from '../pages/landlord-manage/landlord-manage';
import {RentFavoritesContactedPage} from '../pages/rent-favorites-contacted/rent-favorites-contacted';
import {RentFavoritesFavoritesPage} from '../pages/rent-favorites-favorites/rent-favorites-favorites';
import {RentFavoritesOnHoldPage} from '../pages/rent-favorites-on-hold/rent-favorites-on-hold';
import { SplashPage } from '../pages/splash/splash';
import { Storage } from '@ionic/storage';

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
    LandlordSettingsPage,
    RentFavoritesOnHoldPage,
    RentFavoritesFavoritesPage,
    RentFavoritesContactedPage
  ],
  imports: [
    IonicModule.forRoot(PangoRentApp),
    HttpModule
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
    LandlordSettingsPage,
    RentFavoritesOnHoldPage,
    RentFavoritesFavoritesPage,
    RentFavoritesContactedPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Storage
  ]
})
export class AppModule {}
