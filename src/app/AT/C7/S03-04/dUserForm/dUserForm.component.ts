import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AppState } from '../../../../app.service';
import { Title } from '../../../../home/title';
import { XLargeDirective  } from '../../../../home/x-large';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'dUserForm',
  templateUrl: 'dUserForm.component.pug',
  styleUrls: [ 'dUserForm.component.styl' ]
})
export class DUserFormComponent implements OnInit {
  public formModel: FormGroup;
  public title: string;
  private useFormBuilder: boolean = false;
  constructor(public route: ActivatedRoute, public fb: FormBuilder, public appState: AppState,
              public gtitle: Title ) {
  }
  public ngOnInit() {
    this.useFormBuilder = this.route.routeConfig.data[0]['useFormBuilder'];
    this.title = this.useFormBuilder ? 'User Form with Form Builder' : 'User Form with FormGroup';
    this.formModel = this.useFormBuilder ?
        this.fb.group({
            username: [''],
            ssn: [''],
            passwordsGroup: this.fb.group({
                password: [''],
                pconfirm: ['']
            })
        })
        :
        new FormGroup({
            username: new FormControl(),
            ssn: new FormControl(),
            passwordsGroup: new FormGroup({
                password: new FormControl(),
                pconfirm: new FormControl()
           })
        });
    this.route.queryParams.subscribe((param) => {
        this.title = param['name'] + ': ' + this.title;
    });
  }
  public onSubmit() {
    console.log(this.formModel.value);
    this.appState.set('value', this.formModel.value);
  }
}
// Property 'controls' does not exist on type 'AbstractControl'.
