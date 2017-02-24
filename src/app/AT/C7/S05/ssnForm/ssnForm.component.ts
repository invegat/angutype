import { Component, OnInit } from '@angular/core';
import { AppState } from '../../../../app.service';
import { Title } from '../../../../home/title';
import { XLargeDirective  } from '../../../../home/x-large';
import { ActivatedRoute } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'ssnForm',
  templateUrl: 'ssnForm.component.pug'
})
export class SsnFormComponent implements OnInit {
    private form: FormGroup;
    private title: string = 'SSN Validation';
    constructor(public route: ActivatedRoute, public appState: AppState,
                public gtitle: Title ) {
        this.form = new FormGroup({
            'my-ssn': new FormControl('', this.ssnValidator)
        });
    }
    public ngOnInit() {
        this.route.params.subscribe((param) => {
            this.title = param['name'] + ': ' + this.title;
        });
     }
     private ssnValidator(control: FormControl): {[key: string]: any} {
        const value: string = control.value || '';
        const valid  = value.match(/^\d{9}$/);
        return valid ? null : {ssn: true};
    }

}
