import { ROUTES } from './At.routes';
import { CommonModule } from '@angular/common';
import { TFormComponent } from './C7/S01';
import { DFormComponent } from './C7/S02';
import { DUserFormComponent } from './C7/S03-04';
import { SsnFormComponent } from './C7/S05';
import { SsnValidatorDirective, SsnValidatorDirectiveComponent } from './C7/S06';
import { SsnValidatorErrorMessageComponent } from './C7/S07';
import { AsyncSsnValidatorComponent } from './C7/S08';
import { ReactiveValidationComponent } from './C7/S09';
import { TemplateValidationComponent, EqualValidatorDirective } from './C7/S10';
import { DefaultValueAccessorComponent, CustomInputComponent } from './C7/S11';
import { DFormComponentPlusRemoveComponent } from './C7/S12';
import { ProductClientComponent } from './C8/http_websocket_samples/client';
import { ProductClientAsyncComponent } from './C8/http_websocket_samples/asyncClient';
import { MainFormComponent  } from './C8/http_websocket_samples/main-form';
import { MainWithServiceComponent } from './C8/http_websocket_samples/main-with-service';
// import { MarkdownToHtmlPipe } from 'markdown-to-html-pipe';
import {
    RouterModule,
    Router
} from '@angular/router';
import {
    NgModule
} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Injectable } from '@angular/core/index';
// import { MarkdownToHtmlModule  }  from 'markdown-to-html-pipe'

@Injectable()
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
       // MarkdownToHtmlModule,
        RouterModule.forChild(ROUTES)
    ],
    declarations: [
        TFormComponent,
        DFormComponent,
        DUserFormComponent,
        SsnFormComponent,
        SsnValidatorDirective,
        SsnValidatorDirectiveComponent,
        SsnValidatorErrorMessageComponent,
        AsyncSsnValidatorComponent,
        ReactiveValidationComponent,
        TemplateValidationComponent,
        EqualValidatorDirective,
        DefaultValueAccessorComponent,
        CustomInputComponent,
        DFormComponentPlusRemoveComponent,
        ProductClientComponent,
        ProductClientAsyncComponent,
        MainFormComponent,
        MainWithServiceComponent
        // MarkdownToHtmlPipe
    ]
})
export class AtAppModule { }
