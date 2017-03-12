import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {NavController, NavParams, Content, ViewController} from 'ionic-angular';
import {PlatformDetails} from '../../providers/platform-details';
import {UserResource} from '../../providers/models/models';
import {Validators, FormBuilder, FormGroup, AbstractControl} from '@angular/forms';
import {PangoValidators} from '../../validators/pango-validator';
import {PangoUiUtils} from '../../providers/pango-ui-utils';
import {Error} from '../../providers/models/Error';
import {RegistrationService} from '../../providers/registration';
import {RegistrationResponse} from "../../providers/models/RegistrationResponse";
import {SignupCompletePage} from "../signup-complete/signup-complete";
import {PangoModalUtils} from "../../providers/pango-modal-utils";
import {PangoErrorResource} from "../../providers/models/PangoErrorResource";


@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage implements OnInit {
  fatalErrorMessage: string = '';

  @ViewChild(Content) content: Content;

  registrationForm: FormGroup;
  user: UserResource = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
    emailAddress: '',
    address: {
      addressLine1: '',
      addressLine2: '',
      city: '',
      state: '',
      zip: '',
      country: ''
    }
  };

  formErrors: any = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
    emailAddress: '',
    address: ''
  };

  validationMessages = {
    'firstName': {
      required: 'First Name is required.',
      minlength: 'First Name must be at least 1 character.',
    },
    'lastName': {
      required: 'Surname is required.',
      minlength: 'Surname must be at least 2 characters.',
    },
    'phoneNumber': {
      pattern: 'Phone number should contain only numbers.'
    },
    'password': {
      required: 'Password is required.',
      minlength: 'Password must be at least 6 characters long.',
      passwordMismatch: 'The passwords do not match.'
    },
    'confirmPassword': {
      required: 'Password confirmation is required.',
      minlength: 'Password confirmation must be at least 6 characters long.',
      passwordMismatch: 'The passwords do not match.'
    },
    'emailAddress': {
      required: 'Email Address is required.',
      minlength: 'Email Address must be at least 6 characters long.',
      improperEmail: 'Must be a valid email.'
    }
  };

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public platformDetails: PlatformDetails,
              public pangoUiUtils: PangoUiUtils,
              public registrationService: RegistrationService,
              public viewCtrl: ViewController,
              public pangoModalUtils: PangoModalUtils,
              @Inject(FormBuilder) private formBuilder: FormBuilder) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad: SignupPage.');
  }

  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(1)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      phoneNumber: ['', Validators.pattern("[0-9]+")],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6), PangoValidators.confirmPassword]],
      emailAddress: ['', [Validators.required, Validators.minLength(6), PangoValidators.email]],
      address: this.formBuilder.group({
        addressLine1: ['', [PangoValidators.address]],
        addressLine2: ['', [PangoValidators.address]],
        city: ['', [PangoValidators.address]],
        state: ['', [PangoValidators.address]],
        zip: ['', [PangoValidators.address]],
        country: ['', [PangoValidators.address]]
      })
    });

    this.registrationForm.valueChanges.subscribe((data) => this.validate(data));
  }

  validateControl(control: AbstractControl, field: string) {
    if (control && control.dirty && !control.valid) {
      const messages = this.validationMessages[field];

      for (const key in control.errors) {
        this.formErrors[field] += messages[key] + ' ';
      }
    }
  }

  validateAddress(form: FormGroup) {
    this.clearFieldErrors('address');

    const ctrlAddressLine1 = form.get(['address', 'addressLine1']);
    const ctrlAddressLine2 = form.get(['address', 'addressLine2']);
    const ctrlCity = form.get(['address', 'city']);
    const ctrlState = form.get(['address', 'state']);
    const ctrlZip = form.get(['address', 'zip']);
    const ctrlCountry = form.get(['address', 'country']);

    if (!ctrlAddressLine1.valid || !ctrlAddressLine2.valid || !ctrlCity.valid || !ctrlState.valid || !ctrlZip.valid || !ctrlCountry.valid) {
      this.formErrors['address'] += 'Please fill out all address fields.';

      // It does not appear that I can force validation on untouched controls in order to make them decorate red.
      ctrlAddressLine1.setErrors(['err', 'err']);
      ctrlAddressLine1.updateValueAndValidity({onlySelf: true, emitEvent: false});

      ctrlAddressLine2.setErrors(['err', 'err']);
      ctrlAddressLine2.updateValueAndValidity({onlySelf: true, emitEvent: true});

      ctrlCity.setErrors(['err', 'err']);
      ctrlCity.updateValueAndValidity({onlySelf: true, emitEvent: true});

      ctrlState.setErrors(['err', 'err']);
      ctrlState.updateValueAndValidity({onlySelf: true, emitEvent: true});

      ctrlZip.setErrors(['err', 'err']);
      ctrlZip.updateValueAndValidity({onlySelf: true, emitEvent: true});

      ctrlCountry.setErrors(['err', 'err']);
      ctrlCountry.updateValueAndValidity({onlySelf: true, emitEvent: true});
    }

    // This removes the error from the field that now has a value as we want
    // the other address fields to be in error.
    if (ctrlAddressLine1.dirty) {
      ctrlAddressLine1.setErrors(null);
    }

    if (ctrlAddressLine2.dirty) {
      ctrlAddressLine2.setErrors(null);
    }

    if (ctrlCity.dirty) {
      ctrlCity.setErrors(null);
    }

    if (ctrlState.dirty) {
      ctrlState.setErrors(null);
    }

    if (ctrlZip.dirty) {
      ctrlZip.setErrors(null);
    }

    if (ctrlCountry.dirty) {
      ctrlCountry.setErrors(null);
    }
  }

  validate(data?: any) {
    if (!this.registrationForm) {
      return;
    }

    const form = this.registrationForm;

    for (const field in this.formErrors) {
      if (field !== 'address') {
        this.clearFieldErrors(field);
        const control = form.get(field);
        this.validateControl(control, field);
      }
    }

    this.validateAddress(form);
  }

  clearFieldErrors(field: string) {
    this.formErrors[field] = '';
  }

  doSignup({value, valid}: {value: UserResource, valid: boolean}) {
    this.fatalErrorMessage = '';
    this.pangoUiUtils.showLoader();

    if (valid) {
      this.user = this.registrationForm.value;

      this.registrationService.register(this.user)
        .subscribe((registrationResponse: RegistrationResponse) => {

          this.pangoUiUtils.hideLoader();
          this.navCtrl.setRoot(SignupCompletePage);

        }, (error: Error) => {
          this.pangoUiUtils.hideLoader();
          if (error.status == 409) {
            // USER_WITH_EMAIL_DOES_EXIST
            this.showSystemError(`A user account with the email address: ${RegistrationService.maskEmailAddress(this.user.emailAddress)} already exists.`,
              'TRY SIGNING IN', 'Login', this.user);
          } else {
            this.showSystemError('Something has gone wrong with our app.  Please try this action again later.', null, null, null);
          }
        });
    }
  }

  showSystemError(errorMessage: string, buttonTwoText: string, buttonTwoAction: string, payload: any){
      let systemError = {
        'navBarTitle': 'Create an Account',
        'navBarBackText': 'Close',
        'errorMessage': errorMessage,
        'buttonOneText': 'GO BACK',
        'buttonTwoText': buttonTwoText,
        'buttonTwoAction': buttonTwoAction,
        'payload': payload
      };

      this.pangoModalUtils.presentSystemErrorModal(this.navCtrl, systemError);
  }
}
