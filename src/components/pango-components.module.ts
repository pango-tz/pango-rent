import {NgModule} from '@angular/core';
import  {PangoError} from './pango-error/pango-error.component';
import {IonicModule} from 'ionic-angular';
@NgModule({
  declarations: [
    PangoError
  ],
  entryComponents: [
    PangoError
  ],
  exports: [
    PangoError
  ],
  imports: [IonicModule]
})
export class PangoComponentsModule {
}
