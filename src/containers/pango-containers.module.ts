import {NgModule} from '@angular/core';
import  {PangoNavbar} from './pango-navbar/pango-navbar.component';
import  {PangoModalNavbar} from './pango-modal-navbar/pango-modal-navbar.component';
import { IonicModule } from 'ionic-angular';
@NgModule({
  declarations: [
    PangoNavbar,
    PangoModalNavbar
  ],
  entryComponents: [
    PangoNavbar,
    PangoModalNavbar
  ],
  exports: [
      PangoNavbar,
    PangoModalNavbar
  ],
  imports: [IonicModule]
})
export class PangoContainersModule {}