import {RentTabsPage} from './rent-tabs/rent-tabs';
import {LandlordTabsPage} from './landlord-tabs/landlord-tabs';
import {RentSearchPage} from './rent-search/rent-search';
import {RentSettingsPage} from './rent-settings/rent-settings';
import {RentAlertsPage} from './rent-alerts/rent-alerts';
import {RentFavoritesPage} from './rent-favorites/rent-favorites';
import {RentFavoritesContactedPage} from './rent-favorites-contacted/rent-favorites-contacted';
import {RentFavoritesSavedPage} from './rent-favorites-saved/rent-favorites-saved';
import {RentFavoritesOnHoldPage} from './rent-favorites-on-hold/rent-favorites-on-hold';
import{ LandlordHomePage } from './landlord-home/landlord-home';
import{ LandlordSettingsPage } from './landlord-settings/landlord-settings';
import{ LandlordManagePage } from './landlord-manage/landlord-manage';
import { SplashPage } from './splash/splash';
import {LoginPage} from './login/login';
import {SignupPage} from './signup/signup';
import {SignupCompletePage} from './signup-complete/signup-complete';
import {AccountVerificationPage} from "./account-verification/account-verification";
export const pangoLinks: Array<any> = [
    { component: RentTabsPage, segment: 'rent', name: 'Rent' },
    { component: LandlordTabsPage, segment: 'landlord', name: 'Landlord' },
    { component: RentAlertsPage, segment: '', name: 'RentAlerts' },
    { component: RentSearchPage, segment: '', name: 'RentSearch' },
    { component: RentSettingsPage, segment: '', name: 'RentSettings' },
    { component: RentFavoritesPage, segment: '', name: 'RentFavorites' },
    { component: RentFavoritesContactedPage, segment: '', name: 'RentFavoritesContacted' },
    { component: RentFavoritesSavedPage, segment: '', name: 'Rent Favorites Saved' },
    { component: RentFavoritesOnHoldPage, segment: '', name: 'Rent Favorites On Hold' },
    { component: LandlordSettingsPage, segment: 'settings', name: 'Landlord Settings' },
    { component: LandlordManagePage, segment: 'manage', name: 'Landlord Settings' },
    { component: LandlordHomePage, segment: 'home', name: 'Landlord Home' },
    { component: LoginPage, segment: 'login', name: 'Login' },
    { component: SignupPage, segment: 'signup', name: 'Sign Up' },
    { component: SplashPage, segment: '', name: 'Splash Page' },
    { component: SignupCompletePage, segment: 'signupComplete', name: 'Sign Up Complete' },
    { component: AccountVerificationPage, segment: 'accountVerification', name: 'Account Verification' }
];
