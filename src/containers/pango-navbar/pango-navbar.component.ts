import {Component, Input, Output, EventEmitter} from '@angular/core';
import {NavController, ModalController, Platform} from 'ionic-angular';
import {LoginPage} from '../../pages/login/login';
import {SignupPage} from '../../pages/signup/signup';
import {PlatformDetails} from '../../providers/platform-details';
import {RegistrationService} from "../../providers/registration";
import {Auth} from "../../providers/auth";
import {RentTabsPage} from "../../pages/rent-tabs/rent-tabs";
import {LoginFlowHandler} from '../../providers/login-flow-handler';
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
  @Input('showLogoutButton') showLogoutButton: boolean = false;

  @Output('createAlert') createAlert: EventEmitter<any> = new EventEmitter();
  @Output('filter') filter: EventEmitter<any> = new EventEmitter();
  @Output('onCancel') cancel: EventEmitter<any> = new EventEmitter();

  constructor(public navCtrl: NavController,
              public platformDetails: PlatformDetails,
              private registrationService: RegistrationService,
              private loginFlow: LoginFlowHandler,
              public auth: Auth) {

    // todo: Tidy up the settings for which links to show based on their registered and login status.
    this.registrationService.isUserRegistered().subscribe((isUserRegistered: boolean) => {
      this.showSigninButton = isUserRegistered;
      this.showSignupButton = !isUserRegistered;
    });

    this.auth.isLoggedIn().subscribe((isLoggedIn: boolean) => {
      this.showSigninButton = !isLoggedIn;
      this.showLogoutButton = isLoggedIn;
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

  navSignin() {
    this.loginFlow.showLoginModal(this.navCtrl);
  }

  navSignup() {

    this.navCtrl.setRoot(SignupPage);
  }

  navLogout() {
    this.auth.logOut();
    this.navCtrl.popTo(RentTabsPage);
  }
}
