import { Directive, ElementRef, Renderer, HostListener, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  @HostListener('mouseenter') mouseover() {
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave() {
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('click', ['$event']) onclick(event) {
    console.log('Evenet target : ' + event.target);
    this.backgroundColor = 'blue';
  }
  
  @HostBinding('style.backgroundColor') get setColor() {
    return this.backgroundColor;
  }

  @Input() defaultColor = 'white';
  @Input('highlight') highlightColor = 'green';
  private backgroundColor: string;

  constructor() {

  }  

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }

  //constructor(private elementRef: ElementRef, private renderer: Renderer) {
     //this.elementRef.nativeElement.style.backgroundColor = 'green' // PAS UNE BONNE PRATIQUE
     //this.renderer.setElementStyle(this.elementRef.nativeElement, 'background-color', 'green')    // POSSIBLE AUSSI PRATIQUE CORRECTE
  //}

}
