import { 
  Directive, ElementRef, 
  Renderer, HostListener, 
  HostBinding, Input
} from '@angular/core';

@Directive({
  selector: '[appAdvancedHighlight]'
})
export class AdvancedHighlightDirective {
  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'blue';
  @HostBinding('style.backgroundColor') bgColor: string;

  constructor(private elementRef: ElementRef, private renderer: Renderer) { }

  ngOnInit() {
    this.bgColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {    
    // this.renderer.setElementStyle(this.elementRef.nativeElement, 'backgroundColor', 'blue');
    this.bgColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {    
    // this.renderer.setElementStyle(this.elementRef.nativeElement, 'backgroundColor', 'transparent');
    this.bgColor = this.defaultColor;
  }
}
