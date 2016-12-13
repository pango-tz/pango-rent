import {Component, Input, Output, EventEmitter} from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'pango-navbar',
    templateUrl: 'pango-navbar.html'
})
export class PangoNavbar {
    @Input('subTitle') subTitle;
    @Input('showBackButton') showBackButton: boolean;
    @Input('showFilterButton') showFilterButton: boolean = true;
    @Input('showCreateAlertButton') showCreateAlertButton: boolean = true;
    @Output('createAlert') createAlert: EventEmitter<any> = new EventEmitter();
    @Output('filter') filter: EventEmitter<any> = new EventEmitter();
    
    constructor (public navCtrl: NavController) { }

    onBackButtonClicked() {
        if (this.navCtrl.canGoBack()) {
            this.navCtrl.pop();
        }
    }

    emitCreateAlert() {
        this.createAlert.emit(null);
    }

    emitFilter() {
        this.filter.emit(null);
    }

}