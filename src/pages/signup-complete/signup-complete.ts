import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {RentSearchPage} from "../rent-search/rent-search";

/*
  Generated class for the SignupComplete page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-signup-complete',
  templateUrl: 'signup-complete.html'
})
export class SignupCompletePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupCompletePage');
  }


  searchPropertiesClicked() {
    this.navCtrl.setRoot(RentSearchPage);
  }

}
