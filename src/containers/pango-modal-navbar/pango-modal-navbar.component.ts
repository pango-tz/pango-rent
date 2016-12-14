import {Component, Input} from '@angular/core';
import { NavController} from 'ionic-angular';

@Component({
    selector: 'pango-modal-navbar',
    templateUrl: 'pango-modal-navbar.html'
})
export class PangoModalNavbar {
    @Input('subTitle') subTitle;
    @Input('backButtonText') backButtonText: string = 'Back';
    
    constructor (public navCtrl: NavController) { }

    onBackButtonClicked() {
        this.navCtrl.pop();
    }


}