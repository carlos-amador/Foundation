import { Validators, AbstractControl, ValidatorFn} from '@angular/forms';

export class fieldMatchValidators {

    static fieldMatcher(field1: string, field2: string): ValidatorFn {
        return (c: AbstractControl): { [key: string]: boolean } | null => {

            let fieldCtrl1 = c.get(field1);
            let fieldCtrl2 = c.get(field2);
            if (fieldCtrl1.value !== fieldCtrl2.value) {
                return { 'fieldMatch': true };
            }
            return null;
        };
    }
}


