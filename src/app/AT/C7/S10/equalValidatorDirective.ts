import {  FormGroup, NG_VALIDATORS } from '@angular/forms';
import { Directive } from '@angular/core';

export function equalValidator({value}: FormGroup): {[key: string]: any } {
  const [first, ...rest] = Object.keys(value || '');
  const valid = rest.every((v) => value[v] === value[first]);
  return valid ? null : {equal: true};
}

@Directive({
   selector: '[equal]',
   providers: [{provide: NG_VALIDATORS, useValue: equalValidator, multi: true}]
})
export class EqualValidatorDirective { }
