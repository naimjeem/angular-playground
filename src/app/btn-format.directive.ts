import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBtnFormat]'
})
export class BtnFormatDirective {

  constructor( private el: ElementRef ) { }

  @HostListener('click') onClick() {
    const value: string = this.el.nativeElement.value;
    this.el.nativeElement.value = value.toUpperCase();
  }

}
