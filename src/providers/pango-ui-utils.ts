import {Injectable} from '@angular/core';
import {LoadingController, Loading, ModalController} from 'ionic-angular';
import 'rxjs/add/operator/map';

@Injectable()
export class PangoUiUtils {
  public loader: Loading;

  constructor(public loadingCtrl: LoadingController, public modalCtrl: ModalController) {
  }

  private createLoader() {
    this.loader = this.loadingCtrl.create({
      spinner: 'dots',
      showBackdrop: true
    });
  }

  showLoader() {
    this.hideLoader();
    this.createLoader();
    this.loader.present();
  }

  hideLoader() {
    if (this.loader) {
      this.loader.dismiss();
    }
  }
}
