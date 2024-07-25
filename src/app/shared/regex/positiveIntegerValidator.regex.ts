import { AbstractControl, ValidatorFn } from '@angular/forms';

export function positiveIntegerValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const value = control.value;
    if (value === null || value === undefined || value === '') {
      return null; // Allow empty values or null values
    }
    const isInteger = Number.isInteger(value);
    const isPositive = value > 0;
    return isInteger && isPositive ? null : { 'positiveInteger': { value } };
  };
}
