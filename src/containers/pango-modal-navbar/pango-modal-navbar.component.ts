import {Component, Input, Output, EventEmitter} from '@angular/core';
import { NavController} from 'ionic-angular';

@Component({
    selector: 'pango-modal-navbar',
    templateUrl: 'pango-modal-navbar.html'
})
export class PangoModalNavbar {
    @Input('subTitle') subTitle;
    @Input('backButtonText') backButtonText: string = 'Back';
    @Output('onCancel') cancel: EventEmitter<any> = new EventEmitter();

    constructor (public navCtrl: NavController) {
    }

    onBackButtonClicked() {
        this.cancel.emit(null);
    }
}
