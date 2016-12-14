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
export const pangoLinks: Array<any> = [
    { component: SplashPage, segment: 'home', name: 'Splash Page' },
    { component: RentTabsPage, segment: 'rent', name: 'Rent' },
    { component: LandlordTabsPage, segment: 'landlord', name: 'Landlord' },
    { component: RentAlertsPage, segment: 'alerts', name: 'Rent Alerts' },
    { component: RentSearchPage, segment: 'search', name: '' },
    { component: RentSettingsPage, segment: 'settings', name: 'Rent Settings' },
    { component: RentFavoritesPage, segment: 'favorites', name: 'Rent Favorites' },
    { component: RentFavoritesContactedPage, segment: 'contacted', name: 'Rent Favorites Contacted' },
    { component: RentFavoritesSavedPage, segment: 'saved', name: 'Rent Favorites Saved' },
    { component: RentFavoritesOnHoldPage, segment: 'on-hold', name: 'Rent Favorites On Hold' },
    { component: LandlordSettingsPage, segment: 'settings', name: 'Landlord Settings' },
    { component: LandlordManagePage, segment: 'manage', name: 'Landlord Settings' },
    { component: LandlordHomePage, segment: 'home', name: 'Landlord Home' },
    { component: LoginPage, segment: 'login', name: 'Login' },
    { component: SignupPage, segment: 'signup', name: 'Sign Up' }
]