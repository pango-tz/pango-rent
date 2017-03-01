import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PangoErrorDirective} from './pango-error.directive';
import {PangoEmailValidatorDirective} from './pango-email.directive';
import {PangoConfirmPasswordValidatorDirective} from './pango-confirm-password.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [
    PangoErrorDirective,
    PangoEmailValidatorDirective,
    PangoConfirmPasswordValidatorDirective
  ],
  exports: [
    PangoErrorDirective,
    PangoEmailValidatorDirective,
    PangoConfirmPasswordValidatorDirective
  ]
})
export class PangoDirectivesModule {
}
