import { AbstractControl } from "@angular/forms";
import { ValidationErrors } from "@angular/forms";

export class LowerCase {
    static validate(control: AbstractControl): ValidationErrors | null {
        const value = control.value;

        return value === value.toLowerCase() ? null : { lowercase: true }
    }
}