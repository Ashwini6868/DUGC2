import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { MainHomepageComponent } from './main-homepage/main-homepage.component';
import { FacultyLoginComponent } from './faculty-login/faculty-login.component';
import { CoordinatorComponent } from './coordinator/coordinator.component';
import { DugcCoordinatorComponent } from './dugc-coordinator/dugc-coordinator.component';
import { DugcChairmanComponent } from './dugc-chairman/dugc-chairman.component';

const routes: Routes = [
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'home', component: MainHomepageComponent },
  { path:'faculty-log', component: FacultyLoginComponent},
  { path:'coordinator-log',component:CoordinatorComponent},
  { path:'dugc-coordinator-log',component:DugcCoordinatorComponent},
  { path:'dugc-chairman-log',component:DugcChairmanComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
