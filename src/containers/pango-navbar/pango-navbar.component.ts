import {Component, Input, Output, EventEmitter} from '@angular/core';
import { NavController, ModalController, Platform} from 'ionic-angular';
import { LoginPage } from '../../pages/login/login';
import { SignupPage } from '../../pages/signup/signup';
import {PlatformDetails} from '../../providers/platform-details';
import {RegistrationService} from "../../providers/registration";

@Component({
    selector: 'pango-navbar',
    templateUrl: 'pango-navbar.html'
})
export class PangoNavbar {
    @Input('subTitle') subTitle;
    @Input('backButtonText') backButtonText: string = 'Back';
    @Input('useCustomBackButtonEvent') useCustomBackButtonEvent = false;
    @Input('showBackButton') showBackButton: boolean = false;

    // Hiding the showFilterButton and showCreateAlertButton until we implement the feature.
    @Input('showFilterButton') showFilterButton: boolean = false;
    @Input('showCreateAlertButton') showCreateAlertButton: boolean = false;

    // Default the showSigninButton and showSignupButton to false as their visibility is determined in the constructor.
    @Input('showSigninButton') showSigninButton: boolean = false;
    @Input('showSignupButton') showSignupButton: boolean = false;

    @Output('createAlert') createAlert: EventEmitter<any> = new EventEmitter();
    @Output('filter') filter: EventEmitter<any> = new EventEmitter();
    @Output('onCancel') cancel: EventEmitter<any> = new EventEmitter();

    constructor (public navCtrl: NavController,
                 private modalCtrl: ModalController,
                 public platformDetails: PlatformDetails,
    private registrationService: RegistrationService) {

      this.registrationService.isUserRegistered().subscribe((isUserRegistered: boolean) => {
        this.showSigninButton = isUserRegistered;
        this.showSignupButton = !isUserRegistered;
      });
    }

    onBackButtonClicked() {
        this.cancel.emit(null);
    }

    emitCreateAlert() {
        this.createAlert.emit(null);
    }

    emitFilter() {
        this.filter.emit(null);
    }

    navSignin(){
        let loginModal  = this.modalCtrl.create(LoginPage);
        loginModal.present();
    }

    navSignup(){
      this.navCtrl.push(SignupPage);
    }
}
