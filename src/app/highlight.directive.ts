import { Directive, ElementRef, Renderer, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[dirHighlight]'
})
export class HighlightDirective {

  @HostListener('mouseenter') mouseover() {
    this.backgroundColor = 'green';
  }

  @HostListener('mouseleave') mouseleave() {
    this.backgroundColor = 'white';
  }
  
  @HostBinding('style.backgroundColor') get setColor() {
    return this.backgroundColor;
  }
  private backgroundColor = 'white';

  constructor() {

  }  
  //constructor(private elementRef: ElementRef, private renderer: Renderer) {
     //this.elementRef.nativeElement.style.backgroundColor = 'green' // PAS UNE BONNE PRATIQUE
     //this.renderer.setElementStyle(this.elementRef.nativeElement, 'background-color', 'green')    // POSSIBLE AUSSI PRATIQUE CORRECTE
  //}

}
