import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTrim]'
})
export class TrimDirective {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('keyup') onChange() {
    const trimmedValue = this.elementRef.nativeElement.value.trim();
    this.renderer.setProperty(this.elementRef.nativeElement, 'value', trimmedValue);
  }
}