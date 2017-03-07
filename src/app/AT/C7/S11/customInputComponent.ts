import { Component, Input } from '@angular/core';

@Component({
    selector: 'custom-input',
    template: `<input type="text" [(ngModel)]="value">`
})
export class CustomInputComponent {
    @Input() public value: string;
}
