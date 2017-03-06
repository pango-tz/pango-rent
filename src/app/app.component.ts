import {Component, ViewChild} from '@angular/core';
import {Platform, Config, NavController, Nav} from 'ionic-angular';
import {StatusBar, Splashscreen, Deeplinks} from 'ionic-native';

import {SplashPage} from '../pages/splash/splash';
import {AccountVerificationPage} from "../pages/account-verification/account-verification";
import {PlatformDetails} from "../providers/platform-details";

@Component({
  templateUrl: 'app.html'
})
export class PangoRentApp {
  rootPage = SplashPage;
  @ViewChild(Nav) navCtrl:Nav;

  constructor(public platform: Platform,
              config: Config,
              public platformDetails: PlatformDetails) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  // TODO: There is a delay in routing the deep link such that it shows the home page first, then routes.
  // TODO: How can we go straight to the deep link page?
  ngAfterViewInit() {
    this.platform.ready().then(() => {
      if (this.platformDetails.isMobilePhoneDevice()) {
        Deeplinks.routeWithNavController(this.navCtrl, {
          '/accountVerification/:verificationToken': AccountVerificationPage
        }).subscribe((match) => {
          console.log('Successfully matched route: ', match);
        }, (nomatch) => {
          console.warn('Got a deeplink that did not match: ', nomatch);
        });
      }
    });
  }
}
