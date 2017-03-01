import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Geolocation} from 'ionic-native';
import {PangoUiUtils} from '../../providers/pango-ui-utils';
import {Properties} from '../../providers/properties';
import {RegistrationService} from "../../providers/registration";

@Component({
  selector: 'page-rent-search',
  templateUrl: 'rent-search.html'
})
export class RentSearchPage {
  currentLocation: string = '';
  registrationDate: string = '';

  constructor(public navCtrl: NavController,
              public pangoUiUtils: PangoUiUtils,
              public properties: Properties,
              public registrationService: RegistrationService,) {
  }

  getCurrentLocation() {

    this.pangoUiUtils.showLoader();

    Geolocation.getCurrentPosition().then((resp) => {
      Properties.latitude = resp.coords.latitude;
      Properties.longitude = resp.coords.longitude;

      console.log('Location', resp);

      this.properties.get({
        latitude: Properties.latitude,
        longitude: Properties.longitude,
        propertyPurpose: "Home",
        moveInDateAsString: "2017-01-17"
      })
        .subscribe((properties: Properties[]) => {
          console.log(properties);
          this.pangoUiUtils.hideLoader();
          this.currentLocation = `Lat: ${Properties.latitude}  Lon: ${Properties.longitude}`
        }, (error) => {
          this.pangoUiUtils.hideLoader();
        })

    }).catch((error) => {
      console.log('Error getting location', error);
    })
  }

  getRegistrationDate() {
    this.registrationService.getRegistrationDate().subscribe((date: string) => {

      this.registrationDate = date;

    }, (error: Error) => {
      this.registrationDate = 'There was a problem retrieving your registration date.'
    });
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
