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
import { ReactiveFormsModule, FormBuilder, FormControl, FormGroup } from '@angular/forms';

function asyncSsnValidator(control: FormControl): Observable<any> {
    const value: string = control.value || '';
    const valid = value.match(/^\d{9}$/);
    return Observable
       .of(valid ? null : {ssn: true})
       .delay(5000);
}

@Component({
    templateUrl: 'asyncSsnValidatorComponent.pug'
})
export class AsyncSsnValidatorComponent implements OnInit {
  public title: string = 'Async Validator';
  public form: FormGroup;
  constructor(
    public route: ActivatedRoute,
    public appState: AppState,
    public gtitle: Title
  ) {
      this.form = new FormGroup({
         'my-ssn': new FormControl('', null, asyncSsnValidator)
      });
  }
  public ngOnInit() {
    this.route.queryParams.subscribe((param) => {
         this.title = param['name'] + ': ' + this.title;
    });
  }
}
