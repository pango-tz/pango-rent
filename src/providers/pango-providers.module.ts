import {HttpModule} from '@angular/http';
import {NgModule} from '@angular/core';
import {PlatformDetails} from './platform-details';
import {PangoUiUtils} from './pango-ui-utils';
import {IonicModule} from 'ionic-angular';
import {PangoHttp} from './pango-http';
import {BASE_PATH} from './variables';
import { Auth } from './auth';
@NgModule({
    imports: [HttpModule, IonicModule],
    providers: [
        PlatformDetails,
        PangoUiUtils,
        PangoHttp,
        Auth,
        {provide: BASE_PATH, useValue: '/apis/v1'}
    ]
})
export class PangoProvidersModule {}