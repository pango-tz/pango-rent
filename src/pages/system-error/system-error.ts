import {Component, Input} from '@angular/core';
import {NavController, NavParams, ViewController} from 'ionic-angular';
import {PangoErrorResource} from '../../providers/models/PangoErrorResource';

@Component({
  selector: 'page-system-error',
  templateUrl: 'system-error.html'
})
export class SystemErrorPage {

  @Input('pangoErrorResource') pangoErrorResource: PangoErrorResource;

  constructor(public navCtrl: NavController,
              private navParams: NavParams,
              public viewCtrl: ViewController) {
    this.pangoErrorResource = this.navParams.get('pangoErrorResource');
  }

  dismiss(data: PangoErrorResource) {
    console.log('dismissing system error modal with payload returned: ' + JSON.stringify(data));
    this.viewCtrl.dismiss(data);

    // todo: if there is a next action from button two, then launch it
  }

  onDismiss(data: PangoErrorResource) {
    console.log('onDismiss data = ' + JSON.stringify(data));
    this.dismiss(data);
  }

  ionViewDidLoad() {
  }
}
