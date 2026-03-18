import { AbstractControl, ValidationErrors } from "@angular/forms";

export class TitleCase {
    static validate(control: AbstractControl): ValidationErrors | null {
        const value = control.value;

        return value === value.split(' ').map((char: any) => char.charAt(0).toUpperCase() + char.slice(1)).join(' ') ? null : { titlecase: true }
    }
}