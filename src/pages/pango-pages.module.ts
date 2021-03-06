import {NgModule} from '@angular/core';
import {IonicModule} from 'ionic-angular';
import {PangoProvidersModule} from '../providers/pango-providers.module';
import {PangoContainersModule} from '../containers/pango-containers.module';
import {RentTabsPage} from './rent-tabs/rent-tabs';
import {LandlordTabsPage} from './landlord-tabs/landlord-tabs';
import {RentSearchPage} from './rent-search/rent-search';
import {RentSettingsPage} from './rent-settings/rent-settings';
import {RentAlertsPage} from './rent-alerts/rent-alerts';
import {RentFavoritesPage} from './rent-favorites/rent-favorites';
import {LandlordHomePage} from './landlord-home/landlord-home';
import {LandlordSettingsPage} from './landlord-settings/landlord-settings';
import {LandlordManagePage} from './landlord-manage/landlord-manage';
import {RentFavoritesContactedPage} from './rent-favorites-contacted/rent-favorites-contacted';
import {RentFavoritesSavedPage} from './rent-favorites-saved/rent-favorites-saved';
import {RentFavoritesOnHoldPage} from './rent-favorites-on-hold/rent-favorites-on-hold';
import {SplashPage} from './splash/splash';
import {LoginPage} from './login/login';
import {SignupPage} from './signup/signup';
import {ReactiveFormsModule} from '@angular/forms';
import {PangoDirectivesModule} from '../directives/pango-directives.module';
import {SignupCompletePage} from "./signup-complete/signup-complete";
import {AccountVerificationPage} from "./account-verification/account-verification";
import {PangoComponentsModule} from "../components/pango-components.module";
import {SystemErrorPage} from "./system-error/system-error";
import {ForgotPasswordPage} from "./forgot-password/forgot-password";

@NgModule({
  declarations: [
    AccountVerificationPage,
    ForgotPasswordPage,
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
    RentFavoritesSavedPage,
    RentFavoritesContactedPage,
    LoginPage,
    SignupPage,
    SignupCompletePage,
    SystemErrorPage
  ],
  entryComponents: [
    AccountVerificationPage,
    ForgotPasswordPage,
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
    RentFavoritesSavedPage,
    RentFavoritesContactedPage,
    LoginPage,
    SignupPage,
    SignupCompletePage,
    SystemErrorPage
  ],
  exports: [
    AccountVerificationPage,
    ForgotPasswordPage,
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
    RentFavoritesSavedPage,
    RentFavoritesContactedPage,
    LoginPage,
    SignupPage,
    SignupCompletePage,
    SystemErrorPage
  ],
  imports: [
    IonicModule,
    PangoContainersModule,
    PangoProvidersModule,
    ReactiveFormsModule,
    PangoDirectivesModule,
    PangoComponentsModule]
})
export class PangoPagesModule {
}
