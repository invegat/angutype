import {
  Component,
  OnInit
} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import { AppState } from '../../../app.service';
import { Title } from '../../../home/title';
import { XLargeDirective } from '../../../home/x-large';
import { ActivatedRoute } from '@angular/router';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
function ssnValidator(control: FormControl): {[key: string]: any} {
  const value: string = control.value || '';
  const valid  = value.match(/^\d{9}$/);
  return valid ? null : {ssn: {description: 'SSN is invalid because it does not have 9 numbers'}};
}
function equalValidator({value}: FormGroup): {[key: string]: any } {
  const [first, ...rest] = Object.keys(value || '');
  const valid = rest.every((v) => value[v] === value[first]);
  return valid ? null : {equal: true};
}

@Component({
    templateUrl: './ReactiveValidationComponent.pug'
})
export class ReactiveValidationComponent implements OnInit  {
  public title: string = 'Validate Form Fields';
  public formModel: FormGroup;
  constructor(
    public route: ActivatedRoute,
    public appState: AppState,
    public gtitle: Title
  ) {
      this.formModel = new FormGroup({
         username: new FormControl('', [Validators.required]),
         ssn: new FormControl('', [ssnValidator]),
         passwordsGroup: new FormGroup({
             password: new FormControl('', [Validators.minLength(5)]),
             pconfirm: new FormControl('')
         }, equalValidator)
      });
  } // htpps://github.com/webpack/loader-utils/issues/56
  public onSubmit() {
    if (this.formModel.valid) {
        this.appState.set('value', this.formModel.value);
    } else {
       console.log('setting errors');
       this.appState.set('value', this.formModel.errors);
    }
  }
  public ngOnInit() {
    this.route.queryParams.subscribe((param) => {
         this.title = param['name'] + ': ' + this.title;
    });
  }
}
