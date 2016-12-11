import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the LandlordManage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-landlord-manage',
  templateUrl: 'landlord-manage.html'
})
export class LandlordManagePage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello LandlordManagePage Page');
  }

}
