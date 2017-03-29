import { Injectable } from '@angular/core';
import { NavController} from 'ionic-angular';
import {PangoModalUtils} from './pango-modal-utils';
import { PangoErrorResource } from "./models/PangoErrorResource";

export interface IFlowTypes {
  LOGIN: string;
  REGISTRATION: string;
  FORGOT_PASSWORD: string;
  ERROR: string;
}

@Injectable()
export class LoginFlowHandler {

  constructor(private modalUtils: PangoModalUtils) {

  }

  public static FLOW_TYPES: IFlowTypes = {
    LOGIN: 'login',
    REGISTRATION: 'registration',
    FORGOT_PASSWORD: 'forgotPassword',
    ERROR: 'error'
  };


  call(data: any, navCtrl: NavController, done?: Function) {
    switch(data.goto) {
      case LoginFlowHandler.FLOW_TYPES.LOGIN:
        this.showLoginModal(navCtrl, done);
        break;
      case LoginFlowHandler.FLOW_TYPES.FORGOT_PASSWORD:
        this.showForgotPasswordModal(navCtrl, done);
        break;
      case LoginFlowHandler.FLOW_TYPES.REGISTRATION:
        this.showRegistrationModal(navCtrl, done);
        break;
      case LoginFlowHandler.FLOW_TYPES.ERROR:
        this.showErrorModal(navCtrl, data.errorResource, done);
      default:
        return;
    }
  }

  showForgotPasswordModal(navCtrl: NavController, done?: Function) {
    this.modalUtils.presentForgotPasswordModal(navCtrl).onDidDismiss((data: any) => {
      if (data){
        this.call(data, navCtrl, done);
      } else {
        if (done) {
          done(data);
        }
      }
    });
  }

  showRegistrationModal(navCtrl: NavController, done?: Function) {
    this.modalUtils.presentRegistrationModal(navCtrl).onDidDismiss((data: any) => {
      if (data) {
        this.call(data, navCtrl, done);
      } else {
        if (done) {
          done(data);
        }
      }
    });
  }

  showLoginModal(navCtrl: NavController, done?: Function) {
    this.modalUtils.presentLoginModal(navCtrl).onDidDismiss((data: any) => {
      if (data ) {
        this.call(data, navCtrl, done);
      } else {
        if (done) {
          done(data);
        }
      }
    });
  }

  showErrorModal(navCtrl: NavController, pangoErrorResource: any, done?: Function) {
    this.modalUtils.presentSystemErrorModal(navCtrl, pangoErrorResource).onDidDismiss((data: any) => {
      if (data) {
        this.call(data, navCtrl, done);
      } else {
        if (done) done(data);
      }
    })
  }
}
