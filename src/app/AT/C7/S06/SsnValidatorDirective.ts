import { Component, Directive, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { FormsModule, FormControl, NG_VALIDATORS } from '@angular/forms';
import { AppState } from '../../../app.service';
import { Title } from '../../../home/title';
import { XLargeDirective  } from '../../../home/x-large';
import { ActivatedRoute } from '@angular/router';
function ssnValidator(control: FormControl): {[key: string]: any} {
  const value: string = control.value || '';
  const valid = value.match(/^\d{9}$/);
  return valid ? null : {ssn: true};
}
@Directive({
  selector: '[ssn]',
  providers: [{provide: NG_VALIDATORS, useValue: ssnValidator, multi: true}]
})
export class SsnValidatorDirective { }
