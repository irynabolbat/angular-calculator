import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[myIf]',
  standalone: true,
})
export class MyIfDirectiveDirective implements OnInit {
  private _show: boolean = false;

  @Input() set myIf(show: boolean) {
    this._show = show;
    this.displeyTemplate();
  }

  constructor(
    private vcr: ViewContainerRef,
    private templateRef: TemplateRef<unknown>
  ) {}

  ngOnInit(): void {
    this.displeyTemplate();
  }

  private displeyTemplate() {
    this.vcr.clear();
    if (this._show) {
      this.vcr.createEmbeddedView(this.templateRef);
    }
  }
}
