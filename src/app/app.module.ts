import { NgModule, ErrorHandler } from '@angular/core';
import {HttpModule} from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { PangoRentApp } from './app.component';
import { Storage } from '@ionic/storage';
import {PangoPagesModule} from '../pages/pango-pages.module';
import {pangoLinks} from '../pages/pango-links';

export function provideStorage() { return new Storage(); }
@NgModule({
  declarations: [
    PangoRentApp
  ],
  imports: [
    IonicModule.forRoot(PangoRentApp),
    HttpModule,
    PangoPagesModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    PangoRentApp
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {provide: Storage, useFactory: provideStorage}
  ]
})
export class AppModule {}
