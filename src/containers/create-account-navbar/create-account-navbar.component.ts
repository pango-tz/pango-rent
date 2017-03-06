import {Component, Input, Output, EventEmitter} from '@angular/core';
import { NavController, ModalController, Platform} from 'ionic-angular';

@Component({
  selector: 'create-account-navbar',
  templateUrl: 'create-account-navbar.html'
})
export class CreateAccountNavbar {

  constructor (public navCtrl: NavController) {
  }
}
