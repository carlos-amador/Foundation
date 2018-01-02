import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { ValidationService } from './validation.service';

@Component({
    selector: 'validation',
    template: `<div *ngIf="errorMessage !== null">{{errorMessage}}</div>`,
})
export class ValidationComponent {

    // errorMessage: string;
    @Input() control: AbstractControl;

    constructor() { }

    get errorMessage(): string {
        for (let propertyName in this.control.errors) {
            if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
                return ValidationService.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
            }
        }

        return null;
    }
}
