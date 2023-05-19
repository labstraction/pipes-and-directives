import { Directive, ElementRef, Input } from '@angular/core';
import { __read } from 'tslib';

@Directive({
  selector: '[appSpecialButton]'
})
export class SpecialButtonDirective {

  _appSpecialButton: string = "red";

  @Input() set appSpecialButton(value: string){
    if (value) {
      this._appSpecialButton = value;
      this.element.nativeElement.style.backgroundColor = this._appSpecialButton;
    }

  }

  constructor(private element: ElementRef) {
    this.element.nativeElement.style.backgroundColor = this._appSpecialButton;
  }

}
