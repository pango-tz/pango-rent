import {Directive, ElementRef} from '@angular/core';

@Directive({
    selector: '[pangoError]'
})
export class PangoErrorDirective {
    constructor(el: ElementRef) {
        el.nativeElement.style.color = "#C0392B";
        el.nativeElement.style.backgroundColor = "#FFFFFF";
        el.nativeElement.style.marginLeft = "16px";
        el.nativeElement.style.padding = "8px";
        el.nativeElement.style.borderRadius = "0";
        el.nativeElement.style.border="1px solid #C0392B";
    }
}
