import {Component, Inject, OnInit} from '@angular/core';
import {NavController, ViewController, NavParams} from 'ionic-angular';
import {Auth} from '../../providers/auth';
import {LoginResource, LoginResponse} from '../../providers/models/models';
import {Validators, FormBuilder, FormGroup, AbstractControl} from '@angular/forms';
import {PangoValidators} from '../../validators/pango-validator';
import {PangoUiUtils} from '../../providers/pango-ui-utils';
import {Error} from '../../providers/models/Error';
import {SignupPage} from "../signup/signup";
/*
 Generated class for the Login page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage implements OnInit {
  static loginErrorMessage: string = 'You must sign in to view this page.';
  login: LoginResource = {
    userName: '',
    password: ''
  };

  message500 = 'Looks like something went wrong. Give it a try again.';
  message401 = 'Wrong email or password. Please try again.';
  loginForm: FormGroup;
  fatalErrorMessage: string = '';
  formErrors: any = {
    userName: '',
    password: ''
  };

  validationMessages = {
    'userName': {
      required: 'Email is required.',
      improperEmail: 'Must be a valid email.'
    },
    'password': {
      required: 'Password is required.',
      minlength: 'Password must be at least 6 characters long.'
    }
  };

  constructor(public navCtrl: NavController,
              public auth: Auth,
              @Inject(FormBuilder) private formBuilder: FormBuilder,
              private uiUtils: PangoUiUtils,
              public viewCtrl: ViewController,
              params: NavParams) {

    this.fatalErrorMessage = params.get('loginErrorMessage');

  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userName: ['', [Validators.required, PangoValidators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

    this.loginForm.valueChanges.subscribe((data) => this.validate(data));
  }

  validateControl(control: AbstractControl, field: string) {
    if (control && control.dirty && !control.valid) {
      const messages = this.validationMessages[field];

      for (const key in control.errors) {
        this.formErrors[field] += messages[key] + ' ';
      }
    }
  }

  validate(data?: any) {
    if (!this.loginForm) {
      return;
    }

    const form = this.loginForm;

    for (const field in this.formErrors) {
      this.clearFieldErrors(field);
      const control = form.get(field);

      this.validateControl(control, field);


    }
  }

  clearFieldErrors(field: string) {
    this.formErrors[field] = '';
  }

  dismiss(data: any) {
    this.viewCtrl.dismiss(data);
  }

  onDismiss($event) {
    this.dismiss(null);
  }

  doLogin({value, valid}: {value: LoginResource, valid: boolean}) {

    this.fatalErrorMessage = '';

    if (valid) {
      this.uiUtils.showLoader();

      this.login = this.loginForm.value;

      this.auth.login(this.login)
        .subscribe((loginResponse: LoginResponse) => {
          this.dismiss(loginResponse)
        }, (error: Error) => {
          if (error.status === 401) {
            this.fatalErrorMessage = this.message401;
          } else {
            this.fatalErrorMessage = this.message500;
          }

          this.uiUtils.hideLoader();
        });
    }
  }

  ionViewDidLoad() {

  }

  signup() {
    this.navCtrl.setRoot(SignupPage);
  }

  notImplemented() {
    alert('This feature is not yet implemented.');
  }
}
