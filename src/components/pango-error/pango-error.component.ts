import {Component, Input, Output, EventEmitter} from '@angular/core';
import {NavController, NavParams, ModalController, Platform, ViewController} from 'ionic-angular';
import {SystemError} from "../../providers/models/SystemError";
import {PangoErrorResource} from "../../providers/models/PangoErrorResource";

@Component({
  selector: 'pango-error',
  templateUrl: 'pango-error.html'
})
export class PangoError {

  pangoErrorResource: PangoErrorResource = {
    navBarTitle: '',
    navBarBackText: '',
    errorMessage: '',
    buttonOneText: '',
    buttonTwoText: '',
    buttonTwoAction: null,
    payload: null,
    followButtonTwoAction: false
  };

  @Input()
  set navBarTitle(navBarTitle: string){
    this.pangoErrorResource.navBarTitle = navBarTitle;
  }

  @Input()
  set navBarBackText(navBarBackText: string) {
    this.pangoErrorResource.navBarBackText = navBarBackText;
  }

  @Input()
  set errorMessage(errorMessage: string) {
    this.pangoErrorResource.errorMessage = errorMessage;
  }

  @Input()
  set buttonOneText(buttonOneText: string) {
    this.pangoErrorResource.buttonOneText = buttonOneText;
  }

  @Input()
  set buttonTwoText(buttonTwoText: string) {
    this.pangoErrorResource.buttonTwoText = buttonTwoText;
  }

  @Input()
  set buttonTwoAction(buttonTwoAction: any) {
    this.pangoErrorResource.buttonTwoAction = buttonTwoAction;
  }

  @Input()
  set payload(payload: any) {
    this.pangoErrorResource.payload = payload;
  }

  @Output('onCancelSystemError') cancel: EventEmitter<PangoErrorResource> = new EventEmitter();

  constructor (public navCtrl: NavController,
               private navParams: NavParams,
               public viewCtrl: ViewController) {
    if (navParams){
       this.pangoErrorResource = navParams.get('pangoErrorResource');
    }
  }

  closeModal() {
    // todo Do we really need to emit an event here?
    // this.cancel.emit(this.pangoErrorResource);
    this.viewCtrl.dismiss(this.pangoErrorResource);
  }

  clickButtonOne(){
    // todo Do we really need to emit an event here?
    // this.cancel.emit(this.pangoErrorResource);
    this.viewCtrl.dismiss(this.pangoErrorResource);
  }

  clickButtonTwo(){
    // todo Do we really need to emit an event here?
    this.pangoErrorResource.followButtonTwoAction = true;
    // this.cancel.emit(this.pangoErrorResource);
    this.viewCtrl.dismiss(this.pangoErrorResource);
  }
}
