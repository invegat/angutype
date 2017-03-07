import {  FormControl, NG_VALIDATORS } from '@angular/forms';
import { Directive } from '@angular/core';

export function ssnValidator(control: FormControl): {[key: string]: any} {
  const value: string = control.value || '';
  const valid = value.match(/^\d{9}$/);
  return valid ? null : {ssn: true};
}
@Directive({
  selector: '[ssn]',
  providers: [{provide: NG_VALIDATORS, useValue: ssnValidator, multi: true}]
})
export class SsnValidatorDirective { }
