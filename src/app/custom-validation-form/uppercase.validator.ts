import { AbstractControl, ValidationErrors } from '@angular/forms';

export class Uppercase {
  static validate(control: AbstractControl): ValidationErrors | null {
    // debugger;
    const value = control.value;
    
    return value === value.toUpperCase() ? null : { uppercase: true };
  }
}
