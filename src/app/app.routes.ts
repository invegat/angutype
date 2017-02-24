import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { NoContentComponent } from './no-content';
import { ChapterProjectsComponent  } from './chapterProjects';
import { TFormComponent  } from './AT/C7/S01';
import { DFormComponent  } from './AT/C7/S02';
import { DUserFormComponent  } from './AT/C7/S03-04';
import { SsnFormComponent  } from './AT/C7/S05';
import { SsnValidatorDirectiveComponent  } from './AT/C7/S06';

import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  { path: '',      component: HomeComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'id-701',  component: TFormComponent },
  { path: 'id-702',  component: DFormComponent },
  { path: 'id-703',  component: DUserFormComponent, data: [{useFormBuilder: false}]} ,
  { path: 'id-704',  component: DUserFormComponent, data: [{useFormBuilder: true}]},
  { path: 'id-705',  component: SsnFormComponent},
  { path: 'id-706',  component: SsnValidatorDirectiveComponent},
  { path: 'chapterProjects',  component: ChapterProjectsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'detail', loadChildren: './+detail#DetailModule'},
  { path: 'barrel', loadChildren: './+barrel#BarrelModule'},
  { path: '**',    component: NoContentComponent },
];
