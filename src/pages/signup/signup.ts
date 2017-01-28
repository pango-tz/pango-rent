import { Component, Inject, OnInit } from '@angular/core';
import { NavController, ViewController, NavParams } from 'ionic-angular';


import {Auth} from '../../providers/auth';
import { UserResource, LoginResponse} from '../../providers/models/models';
import {Validators, FormBuilder, FormGroup, AbstractControl} from '@angular/forms';
import {PangoValidators} from '../../validators/pango-validator';
import {PangoUiUtils} from '../../providers/pango-ui-utils';
import {Error} from '../../providers/models/Error';

/*
  Generated class for the Signup page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello SignupPage Page');
  }

}
