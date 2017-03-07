import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { NoContentComponent } from './no-content';
import { ChapterProjectsComponent } from './AT/chapterProjects';
import { DataResolver } from './app.resolver';
// import { AtAppModule } from './AT/At.module';

export const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'angtyp', loadChildren: 'app/AT/At.module#AtAppModule' },
    { path: 'chapterProjects', component: ChapterProjectsComponent },
    { path: 'about', component: AboutComponent },
    { path: 'detail', loadChildren: './+detail#DetailModule' },
    { path: 'barrel', loadChildren: './+barrel#BarrelModule' },
    { path: '**', component: NoContentComponent },
];
