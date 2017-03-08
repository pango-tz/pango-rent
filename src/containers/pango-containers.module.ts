import {NgModule} from '@angular/core';
import  {PangoNavbar} from './pango-navbar/pango-navbar.component';
import  {PangoModalNavbar} from './pango-modal-navbar/pango-modal-navbar.component';
import  {CreateAccountNavbar} from './create-account-navbar/create-account-navbar.component';
import {IonicModule} from 'ionic-angular';
@NgModule({
  declarations: [
    PangoNavbar,
    PangoModalNavbar,
    CreateAccountNavbar
  ],
  entryComponents: [
    PangoNavbar,
    PangoModalNavbar,
    CreateAccountNavbar
  ],
  exports: [
    PangoNavbar,
    PangoModalNavbar,
    CreateAccountNavbar
  ],
  imports: [IonicModule]
})
export class PangoContainersModule {
}
