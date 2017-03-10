import { NavController, ModalController } from 'ionic-angular';
import {Auth} from '../providers/auth';
import {PangoUiUtils} from '../providers/pango-ui-utils';
import {LoginPage} from './login/login';
import {PangoModalUtils} from "../providers/pango-modal-utils";

export abstract class AbstractProtectedPage {

    constructor(protected navCtrl: NavController,
                protected auth: Auth,
                protected modalCtrl: ModalController,
                protected uiUtils: PangoUiUtils,
    protected modalUtils: PangoModalUtils) { }

    abstract initProtected();

    ionViewWillEnter() {
        this.auth.isLoggedIn().
        subscribe((loggedIn: boolean) => {
            if (!loggedIn) {
                this.modalUtils.presentLoginModal(this.navCtrl);
            } else {
                this.initProtected();
            }
        });
    }
}
