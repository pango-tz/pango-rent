import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the RentSearch page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-rent-search',
  templateUrl: 'rent-search.html'
})
export class RentSearchPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello RentSearchPage Page');
  }

  createAlert(event: any) {
    console.log("we got a create alert event");
  }
  
  filter(event: any) {
    console.log("we got a filter event");
  }
}
