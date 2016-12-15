import {HttpModule} from '@angular/http';
import {NgModule} from '@angular/core';
import {PlatformDetails} from './platform-details';
import {PangoUiUtils} from './pango-ui-utils';
import {IonicModule} from 'ionic-angular';

@NgModule({
    imports: [HttpModule, IonicModule],
    providers: [PlatformDetails, PangoUiUtils]
})
export class PangoProvidersModule {}