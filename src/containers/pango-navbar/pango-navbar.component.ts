import {Component, Input, Output, EventEmitter} from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../../pages/login/login';
import { SignupPage } from '../../pages/signup/signup';

@Component({
    selector: 'pango-navbar',
    templateUrl: 'pango-navbar.html'
})
export class PangoNavbar {
    @Input('subTitle') subTitle;
    @Input('showBackButton') showBackButton: boolean;
    @Input('showFilterButton') showFilterButton: boolean = true;
    @Input('showCreateAlertButton') showCreateAlertButton: boolean = true;
    @Input('showLoginButton') showLoginButton: boolean = true;
    @Input('showSignupButton') showSignupButton: boolean = true;
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

    navLogin(){
        this.navCtrl.push(LoginPage);
    }

    navSignup(){
        this.navCtrl.push(SignupPage);
    }

}