import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from 'ionic-native';
import { PangoUiUtils } from '../../providers/pango-ui-utils';
import {Properties} from '../../providers/properties';

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

  constructor(public navCtrl: NavController, public pangoUiUtils: PangoUiUtils, public properties: Properties) {
    
    pangoUiUtils.showLoader();

    Geolocation.getCurrentPosition().then((resp) => {
      Properties.latitude = resp.coords.latitude;
      Properties.longitude = resp.coords.longitude;

      this.properties.get({ 
        latitude: Properties.latitude,
        longitude: Properties.longitude,
        propertyPupose: "Home",
        moveInDateAsString: "2017-01-17"
      })
        .subscribe((properties: Properties[]) => {
          console.log(properties);
        })

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
