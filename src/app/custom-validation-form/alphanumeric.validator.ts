import { AbstractControl, ValidationErrors } from "@angular/forms";

export class Alphanumeric {
    static validate(control: AbstractControl): ValidationErrors | null {
        const value = control.value;

        const regex = /^[A-Za-z0-9]+$/;

        return regex.test(value) ? null : { alphanumeric: true }
    }
}