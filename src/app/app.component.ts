import { Component } from '@angular/core';
import { Platform, Config } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { SplashPage } from '../pages/splash/splash';

@Component({
  templateUrl: 'app.html'
})
export class PangoRentApp {
  rootPage = SplashPage;

  constructor(platform: Platform, config: Config) {
    Splashscreen.show();

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
