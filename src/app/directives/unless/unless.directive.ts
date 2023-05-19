import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  hasView = false;

  @Input() set appUnless(value: boolean){
    if (!value && !this.hasView) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else if (value && this.hasView) {
      this.viewContainer.clear();
      this.hasView = false;
    }
  }

  constructor(private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) {
      console.log('template', this.templateRef)
      console.log('container', this.viewContainer)
    }

}
