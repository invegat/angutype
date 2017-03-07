import {
  Component,
  OnInit
} from '@angular/core';

import { AppState } from '../../../app.service';
import { Title } from '../../../home/title';
import { XLargeDirective } from '../../../home/x-large';
import { ActivatedRoute } from '@angular/router';

// using SsnValidatorDirective exported by 06

@Component({
  templateUrl: './templateValidationComponent.pug',
})
export class TemplateValidationComponent implements OnInit {
  public title: string = 'Template Form Validation';
  constructor(
    public route: ActivatedRoute,
    public appState: AppState,
    public gtitle: Title
  ) { }
  public onSubmit(formValue: any, isFormValid: boolean) {
      if (isFormValid) { this.appState.set('value', formValue); };
  }
  public ngOnInit() {
    this.route.queryParams.subscribe((param) => {
         this.title = param['name'] + ': ' + this.title;
    });
  }
}
