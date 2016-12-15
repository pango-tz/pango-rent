import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Auth} from '../../providers/auth';
import {LoginResponse} from '../../providers/models/models';
/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController, public auth: Auth) {
    this.auth.login({
      userName: 'iddy.magohe@ceitechs.com',
      password: '123456'
    }).subscribe((loginResponse: LoginResponse) => {
      console.log(loginResponse);
    });
  }

  ionViewDidLoad(Auth) {
    
  }

}
