import {NgModule} from '@angular/core';
import  {PangoNavbar} from './pango-navbar/pango-navbar.component';
import { IonicModule } from 'ionic-angular';
@NgModule({
  declarations: [
    PangoNavbar
  ],
  entryComponents: [
    PangoNavbar
  ],
  exports: [
      PangoNavbar
  ],
  imports: [IonicModule]
})
export class PangoContainersModule {}