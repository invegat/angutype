import {
  Component,
  OnInit
} from '@angular/core';

import { AppState } from '../../../app.service';
import { Title } from '../../../home/title';
import { XLargeDirective } from '../../../home/x-large';
import { ActivatedRoute } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormControl, FormGroup } from '@angular/forms';
function ssnValidator(control: FormControl): {[key: string]: any} {
        const value: string = control.value || '';
        const valid  = value.match(/^\d{9}$/);
        return valid ? null : {ssn: {description: 'SSN is invalid'}};
}
@Component({
    templateUrl: './SsnValidatorErrorMessageComponent.pug'
})
export class SsnValidatorErrorMessageComponent implements OnInit  {
  public title: string = 'Custom validator with Error Message';
  public form: FormGroup;
  constructor(
    public route: ActivatedRoute,
    public appState: AppState,
    public gtitle: Title
  ) {
      this.form = new FormGroup({
         'my-ssn': new FormControl('', ssnValidator)
      });
  }
  public ngOnInit() {
    this.route.queryParams.subscribe((param) => {
         this.title = param['name'] + ': ' + this.title;
    });
  }
}
