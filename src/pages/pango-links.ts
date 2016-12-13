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
export const pangoLinks: Array<any> = [
    { component: SplashPage, segment: '', name: 'Splash Page' },
    { component: RentTabsPage, segment: 'rent', name: 'Rent' },
    { component: LandlordTabsPage, segment: 'landlord', name: 'Landlord' },
    { component: RentAlertsPage, segment: 'rent', name: 'Rent Alerts' },
    { component: RentSearchPage, segment: 'rent', name: '' },
    { component: RentSettingsPage, segment: 'rent', name: 'Rent Settings' },
    { component: RentFavoritesPage, segment: 'rent', name: 'Rent Favorites' },
    { component: RentFavoritesContactedPage, segment: 'rent', name: 'Rent Favorites Contacted' },
    { component: RentFavoritesSavedPage, segment: 'rent', name: 'Rent Favorites Saved' },
    { component: RentFavoritesOnHoldPage, segment: 'rent', name: 'Rent Favorites On Hold' },
    { component: LandlordSettingsPage, segment: 'settings', name: 'Landlord Settings' },
    { component: LandlordManagePage, segment: 'manage', name: 'Landlord Settings' },
    { component: LandlordHomePage, segment: 'home', name: 'Landlord Home' }
]