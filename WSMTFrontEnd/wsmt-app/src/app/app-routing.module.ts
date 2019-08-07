import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from '../app/login/login.component';
import { RegisterComponent } from '../app/register/register.component';
import { AuthGuard } from '../app/guards/auth.guard';
import { LeadComponent } from './lead/lead.component';
import { ManagerComponent } from './manager/manager.component';
import { ProjectAssignedComponent } from './project-assigned/project-assigned.component';
import { ReportDetailComponent } from './report-detail/report-detail.component';

const routes: Routes = [
    { path: '', component: LoginComponent, canActivate: [AuthGuard] },
    { path: 'home', component: HomeComponent},
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'lead', component: LeadComponent },
    { path: 'manager', component: ManagerComponent },
    { path: 'project-assigned', component: ProjectAssignedComponent },
    { path: 'report-detail', component: ReportDetailComponent},
    { path: 'report-detail/:id', component: ReportDetailComponent},

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
