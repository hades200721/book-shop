import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicHighlightDirective } from '../shared/basic-highlight.directive';
import { AdvancedHighlightDirective } from '../shared/advanced-highlight.directive';
import { UnlessDirective } from '../shared/unless.directive';
import { DropdownDirective } from '../shared/dropdown.directive';

@NgModule({
    declarations: [
        BasicHighlightDirective,
        AdvancedHighlightDirective,
        UnlessDirective,
        DropdownDirective
    ],
    exports: [
        CommonModule,
        BasicHighlightDirective,
        AdvancedHighlightDirective,
        UnlessDirective,
        DropdownDirective
    ]
})
export class SharedModule { }