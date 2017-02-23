import { Component, OnInit, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ReactiveFormsModule, FormControl, FormGroup, FormArray } from '@angular/forms';
import { AppState } from '../../../../app.service';
import { Title } from '../../../../home/title';
import { XLargeDirective  } from '../../../../home/x-large';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'dform',
    templateUrl: 'dform.component.pug',
    styleUrls: [ 'dform.component.styl' ]
})
export class DFormComponent implements OnInit {
  public title: string = 'Dynamically Add Emails';
  private formModel: FormGroup = new FormGroup({
    emails: new FormArray([ new FormControl() ])
  });
  constructor(public route: ActivatedRoute, public appState: AppState, public gtitle: Title ) { }
  public ngOnInit() {
    console.log('hello from `dform` component');
    this.route.params.subscribe((param) => {
         this.title = param['name'] + ': ' + this.title;
    });
  }
  private addEmail(): void {
    const emails = this.formModel.get('emails') as FormArray;
    emails.push(new FormControl());
  }
  private onSubmit(): void {
    console.log(this.formModel.value);
    this.appState.set('value', this.formModel.value);
  }
  private get value(): string {
    return JSON.stringify( this.formModel.value, null , 4 );
  }
}
