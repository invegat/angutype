import {
    Component,
    OnInit
} from '@angular/core';

import { AppState } from '../../../app.service';
import { Title } from '../../../home/title';
import { XLargeDirective } from '../../../home/x-large';
import { ActivatedRoute } from '@angular/router';
// there is no directive with "exportAs" set to "ngForm"
@Component({

    selector: 'tform',
    // Our list of styles in our component. We may add more to compose many styles together
    styleUrls: ['./tform.styl'],
    // Every Angular template is first compiled by the browser before Angular runs it's compiler
    templateUrl: './tform.pug'
})
export class TFormComponent implements OnInit {
    // Set our default values
    public localState = { value: '' };
    public title: string = 'Template Form';
    // TypeScript public modifiers
    constructor(
        public route: ActivatedRoute,
        public appState: AppState,
        public gtitle: Title
    ) { }
    public ngOnInit() {
        this.route.queryParams.subscribe((param) => {
            this.title = param['name'] + ': ' + this.title;
        });
    }
    // angular 2 set ActivatedRoute params with navigateByUrl
    public submitState(value: any) {
        let j = JSON.stringify(value);
        console.log('submitState', j);
        this.appState.set('value', value);
        this.localState.value = '';
    }
}
