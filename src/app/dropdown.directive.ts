import { selector } from 'rxjs/operator/publish';
import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
    selector:'[appDropdown]'
})

export class DropdownDirectives{
@HostBinding('class.open') isOpen = false;

@HostListener('click') toggleOpen(){
    this.isOpen = !this.isOpen;
}

}