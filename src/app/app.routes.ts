import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { NoContentComponent } from './no-content';
import { ChapterProjectsComponent  } from './chapterProjects';
import { TFormComponent  } from './AT/C7/S01/tform';
import { DFormComponent  } from './AT/C7/S02/dform/dform.component';
import { DUserFormComponent  } from './AT/C7/S03-04/dUserForm';

import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  { path: '',      component: HomeComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'id-701',  component: TFormComponent },
  { path: 'id-702',  component: DFormComponent },
  { path: 'id-703',  component: DUserFormComponent, data: [{useFormBuilder: false}]} ,
  { path: 'id-704',  component: DUserFormComponent, data: [{useFormBuilder: true}]},
  { path: 'chapterProjects',  component: ChapterProjectsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'detail', loadChildren: './+detail#DetailModule'},
  { path: 'barrel', loadChildren: './+barrel#BarrelModule'},
  { path: '**',    component: NoContentComponent },
];
