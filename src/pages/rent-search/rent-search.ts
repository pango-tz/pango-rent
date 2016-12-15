import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from 'ionic-native';
import { PangoUiUtils } from '../../providers/pango-ui-utils';
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

  constructor(public navCtrl: NavController, public pangoUiUtils: PangoUiUtils) {
    

    pangoUiUtils.showLoader();

    Geolocation.getCurrentPosition().then((resp) => {
      console.log(resp);
      pangoUiUtils.hideLoader();
    }).catch((error) => {
      console.log('Error getting location', error);
    })
  }




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
