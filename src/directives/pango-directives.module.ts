import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PangoErrorDirective} from './pango-error.directive';
import {PangoEmailValidatorDirective} from './pango-email.directive';

@NgModule({
    imports: [CommonModule],
    declarations: [
        PangoErrorDirective,
        PangoEmailValidatorDirective
    ],
    exports: [
        PangoErrorDirective,
        PangoEmailValidatorDirective
    ]
})
export class PangoDirectivesModule {}