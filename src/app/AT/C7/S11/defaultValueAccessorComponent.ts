import {
    Component,
    OnInit
} from '@angular/core';
import {
    FormsModule,
    ReactiveFormsModule,
    FormControl,
    DefaultValueAccessor
}
from '@angular/forms';

import { AppState } from '../../../app.service';
import { Title } from '../../../home/title';
import { XLargeDirective } from '../../../home/x-large';
import { ActivatedRoute } from '@angular/router';
import { CustomInputComponent  } from './customInputComponent';

@Component({
    templateUrl: './defaultValueAccessorComponent.pug'
})
export class DefaultValueAccessorComponent implements OnInit {
    public customInput: FormControl = new FormControl();
    public title: string = 'Default Value Accessor';
    constructor(
        public route: ActivatedRoute,
        public appState: AppState,
        public gtitle: Title
    ) { }
    public onSubmit() {
        this.appState.set('value', this.customInput.value);
    }
    public ngOnInit() {
        this.route.queryParams.subscribe((param) => {
            this.title = param['name'] + ': ' + this.title;
        });
    }

}
