import {Component, Inject, OnInit, Optional} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Geolocation} from 'ionic-native';
import {PangoUiUtils} from '../../providers/pango-ui-utils';
import {Properties} from '../../providers/properties';
import {RegistrationService} from '../../providers/registration';
import {SignupCompletePage} from '../signup-complete/signup-complete';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ConfirmAccountResource} from '../../providers/models/models';
import {UserResource} from '../../providers/models/models';
import {AccountVerificationPage} from '../account-verification/account-verification';
import {BASE_PATH} from '../../providers/variables';
import {PangoModalUtils} from "../../providers/pango-modal-utils";
import {Auth} from "../../providers/auth";
import {RentTabsPage} from "../rent-tabs/rent-tabs";
import {SignupPage} from "../signup/signup";
import {LoginFlowHandler} from "../../providers/login-flow-handler"
@Component({
  selector: 'page-rent-search',
  templateUrl: 'rent-search.html'
})
export class RentSearchPage {
  currentLocation: string = '';
  registrationDate: string = '';
  // apiBasePath: string = '';

  constructor(public navCtrl: NavController,
              public pangoUiUtils: PangoUiUtils,
              public pangoModalUtils: PangoModalUtils,
              public properties: Properties,
              public auth: Auth,
              public loginFlow: LoginFlowHandler,
              public registrationService: RegistrationService,
              @Inject(FormBuilder) private confirmAccountFormBuilder: FormBuilder,
              @Inject(FormBuilder) private emailAddressFormBuilder: FormBuilder,
              @Inject(BASE_PATH) @Optional() private basePath: string) {
    // this.apiBasePath = basePath;
  }

  getCurrentLocation() {

    this.pangoUiUtils.showLoader();

    Geolocation.getCurrentPosition().then((resp) => {
      Properties.latitude = resp.coords.latitude;
      Properties.longitude = resp.coords.longitude;

      console.log('Location', resp);

      this.properties.get({
        latitude: Properties.latitude,
        longitude: Properties.longitude,
        propertyPurpose: 'Home',
        moveInDateAsString: '2017-01-17'
      })
        .subscribe((properties: Properties[]) => {
          console.log(properties);
          this.pangoUiUtils.hideLoader();
          this.currentLocation = `Lat: ${Properties.latitude}  Lon: ${Properties.longitude}`
        }, (error) => {
          this.pangoUiUtils.hideLoader();
        })

    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  navSignup() {
    this.navCtrl.setRoot(SignupPage);
  }

  navLogout() {
    this.auth.logOut();
    this.navCtrl.setRoot(RentTabsPage);
  }

  loadSystemErrorModal(){
    let systemError = {
      'navBarTitle': 'Create an Account',
      'navBarBackText': 'Close',
      'errorMessage': 'this is a test error message',
      'buttonOneText': 'GO BACK',
      'buttonTwoText': 'TRY SIGNING IN',
      'buttonTwoAction': 'Login',
      'payload': {'anyvariable':'my test payload'}
    };

    this.loginFlow.showErrorModal(this.navCtrl, systemError, (data) => {
      console.log(data);
    });
  }

  getRegistrationDate() {
    this.registrationService.getRegistrationDate().subscribe((date: string) => {

      this.registrationDate = date;

    }, (error: Error) => {
      this.registrationDate = 'There was a problem retrieving your registration date.'
    });
  }

  deleteRegistrationDate() {
    this.registrationService.deleteRegistrationDate().subscribe((date: string) => {

      this.registrationDate = date;

    }, (error: Error) => {
      this.registrationDate = 'There was a problem deleting your registration date.'
    });
  }

  ionViewDidLoad() {
    console.log('Hello RentSearchPage Page');
  }

  createAlert(event: any) {
    console.log('we got a create alert event');
  }

  filter(event: any) {
    console.log('we got a filter event');
  }

  loadThanksForSigningUpPage() {
    this.navCtrl.setRoot(SignupCompletePage);
  }

  confirmAccountForm: FormGroup;
  confirmAccount: ConfirmAccountResource = {
    confirmToken: ''
  };

  // emailAddressForm: FormGroup;
  // user: UserResource = {
  //   emailAddress: ''
  // };

  ngOnInit() {
    this.confirmAccountForm = this.confirmAccountFormBuilder.group({
      // This is andrew's token.
      confirmToken: ['58bc8cdcc9e77c0005a05226:eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhcmNzaGFubm9uQGdtYWlsLmNvbSIsImF1ZGllbmNlIjoidW4tZXhwaXJpbmciLCJjcmVhdGVkIjoxNDg4NzUxODM2NTcwLCJleHAiOjE0ODg3NTU0MzZ9.DvfnmsUmFF_bzN2fuUs7CWT_P7NBLOykuCrmWDdxOwRcCw6A6aO8AWZkXcuZBTp0Ng5bP34TbHT_rgUqPRfoVw']
    });
    // this.emailAddressForm = this.emailAddressFormBuilder.group({
    //   emailAddress: ['']
    // });
  }

  sendConfirmTokenToAccountConfirmation() {
    this.confirmAccount = this.confirmAccountForm.value;
    this.navCtrl.push(AccountVerificationPage, {verificationToken: this.confirmAccount.confirmToken});
  }

  // saveEmailAddress() {
  //   this.user = this.emailAddressForm.value;
  //   this.registrationService.saveUserEmailAddress(this.user.emailAddress.trim());
  // }
}
