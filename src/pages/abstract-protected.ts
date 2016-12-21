import { NavController, ModalController } from 'ionic-angular';
import {Auth} from '../providers/auth';
import {PangoUiUtils} from '../providers/pango-ui-utils';
import {LoginPage} from './login/login';

export abstract class AbstractProtectedPage {

    constructor(protected navCtrl: NavController, protected auth: Auth, protected modalCtrl: ModalController, protected uiUtils: PangoUiUtils ) { }
    
    abstract initProtected();
    
    ionViewWillEnter() {
        this.auth.isLoggedIn().
        subscribe((loggedIn: boolean) => {
            console.log("Is logged in", loggedIn);
            if (!loggedIn) {
                this.uiUtils.presentLoginModal(this.navCtrl, LoginPage);
            } else {
                this.initProtected();
            }
        });
    }
}