import { Component, Directive, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { FormsModule, FormControl, NG_VALIDATORS, FormGroup } from '@angular/forms';
import { AppState } from '../../../app.service';
import { Title } from '../../../home/title';
import { XLargeDirective } from '../../../home/x-large';
import { ActivatedRoute } from '@angular/router';
import { SsnValidatorDirective, ssnValidator  } from './SsnValidatorDirective';

@Component({
    templateUrl: './SsnValidatorDirective.pug'
})
export class SsnValidatorDirectiveComponent implements OnInit {
   public title: string = 'SSN Directive Validation';
   constructor(public route: ActivatedRoute, public appState: AppState,
               public gtitle: Title ) { }
    public ngOnInit() {
        this.route.queryParams.subscribe((param) => {
            this.title = param['name'] + ': ' + this.title;
        });
     }
 }
