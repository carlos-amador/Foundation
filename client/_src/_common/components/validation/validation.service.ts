import { Injectable } from "@angular/core";
import { FormGroup, FormControl, ValidatorFn, AbstractControl } from '@angular/forms';


@Injectable()
export class ValidationService {

    static config: object;

    constructor() {
    }

    static getValidatorErrorMessage(validatorName: string, validatorValue?: any): string {

        this.config = {
            'required': 'required',
            'pattern': 'not valid',
            'invalidCreditCard': 'is invalid credit card number',
            'invalidEmailAddress': 'invalid email address',
            'invalidPassword': 'invalid password, must be at least 6 characters long, and contain a number.',
            'match': 'values do not match'
            //'minlength': `Minimum length ${validatorValue.requiredLength}`
        };

        return this.config[validatorName];

    }

    static creditCardValidator(control: AbstractControl): { [key: string]: boolean } | null {
        // Visa, MasterCard, American Express, Diners Club, Discover, JCB
        if (control.value.match(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/)) {
            return null;
        } else {
            return { 'invalidCreditCard': true };
        }
    }

    // Revisit - doesn't work
    static emailValidator(control: AbstractControl): { [key: string]: boolean } | null {
        // RFC 2822 compliant regex
        if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
            return null;
        } else {
            return { 'invalidEmailAddress': true };
        }
    }

    static passwordValidator(control: AbstractControl): { [key: string]: boolean } | null {
        //{6,100}           - Assert password is between 6 and 100 characters
        //(?=.*[0-9])       - Assert a string has at least one number
        if (control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/)) {
            return null;
        } else {
            return { 'invalidPassword': true };
        }
    }


    // static fieldMatcher(control:FormControl, field1: string, field2: string)  : ValidatorFn {
    //     return (c: AbstractControl): { [key: string]: boolean } | null => {

    //     let fieldCtrl1 = control.get(field1);
    //     let fieldCtrl2 = control.get(field2);
    //     if (fieldCtrl1.value !== fieldCtrl2.value) {
    //             return { 'fieldMatch': true };
    //         }
    //         return null;
    //     };
    // }

    static fieldMatcher(field1: string, field2: string): ValidatorFn {
        return (control: AbstractControl): { [key: string]: boolean } | null => {

            let fieldCtrl1 = control.get(field1);
            let fieldCtrl2 = control.get(field2);
            if (fieldCtrl1.pristine || fieldCtrl2.pristine) {
                return null;
            }
            if (fieldCtrl1.value !== fieldCtrl2.value) {
                return { 'match': true };
            }
            return null;
        };
    }


}
