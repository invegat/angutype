import { Component, Directive, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { FormsModule, FormControl, NG_VALIDATORS } from '@angular/forms';
import { AppState } from '../../../app.service';
import { Title } from '../../../home/title';
import { XLargeDirective } from '../../../home/x-large';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './SsnValidatorDirective.pug'
})
export class SsnValidatorDirectiveComponent implements OnInit {
   private title: string = 'SSN Directive Validation';
   constructor(public route: ActivatedRoute, public appState: AppState,
               public gtitle: Title ) { };
    public ngOnInit() {
        this.route.params.subscribe((param) => {
            this.title = param['name'] + ': ' + this.title;
        });
     }
 }
