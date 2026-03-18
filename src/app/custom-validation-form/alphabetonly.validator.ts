import { AbstractControl, ValidationErrors } from "@angular/forms";

export class AlphabetOnly {
    static validate(control: AbstractControl): ValidationErrors | null {
        const value = control.value;

        const regex = /^[A-Za-z]+$/;

        return regex.test(value) ? null : { alphabetOnly: true }
    }
}