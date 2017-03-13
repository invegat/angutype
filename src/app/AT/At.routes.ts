import { Routes } from '@angular/router';

import { TFormComponent } from './C7/S01';
import { DFormComponent } from './C7/S02';
import { DUserFormComponent } from './C7/S03-04';
import { SsnFormComponent } from './C7/S05';
import { SsnValidatorDirective, SsnValidatorDirectiveComponent } from './C7/S06';
import { SsnValidatorErrorMessageComponent } from './C7/S07';
import { AsyncSsnValidatorComponent } from './C7/S08';
import { ReactiveValidationComponent } from './C7/S09';
import { TemplateValidationComponent, EqualValidatorDirective } from './C7/S10';
import { DefaultValueAccessorComponent } from './C7/S11';
import { DFormComponentPlusRemoveComponent } from './C7/S12';
import { ProductClientComponent } from './C8/http_websocket_samples/client';
import { ProductClientAsyncComponent } from './C8/http_websocket_samples/asyncClient';
import { MainFormComponent } from './C8/http_websocket_samples/main-form';
import { MainWithServiceComponent } from './C8/http_websocket_samples/main-with-service';

export const ROUTES: Routes = [
  { path: 'id-701', component: TFormComponent },
  { path: 'id-702', component: DFormComponent },
  { path: 'id-703', component: DUserFormComponent, data: [{ useFormBuilder: false }] },
  { path: 'id-704', component: DUserFormComponent, data: [{ useFormBuilder: true }] },
  { path: 'id-705', component: SsnFormComponent },
  { path: 'id-706', component: SsnValidatorDirectiveComponent },
  { path: 'id-707', component: SsnValidatorErrorMessageComponent },
  { path: 'id-708', component: AsyncSsnValidatorComponent },
  { path: 'id-709', component: ReactiveValidationComponent },
  { path: 'id-710', component: TemplateValidationComponent },
  { path: 'id-711', component: DefaultValueAccessorComponent },
  { path: 'id-712', component: DFormComponentPlusRemoveComponent },
  { path: 'id-801', component: ProductClientComponent },
  { path: 'id-802', component: ProductClientAsyncComponent },
  { path: 'id-803', component: MainFormComponent },
  { path: 'id-804', component: MainWithServiceComponent }
];
