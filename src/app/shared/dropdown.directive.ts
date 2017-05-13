import { 
    Directive, ElementRef,
    HostListener, Renderer,
    HostBinding
} from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})

export class DropdownDirective {
    @HostBinding('class.open') isOpen: boolean = false;

    @HostListener('click') onclick(eventData: Event) {
        this.isOpen = !this.isOpen;
    }
}