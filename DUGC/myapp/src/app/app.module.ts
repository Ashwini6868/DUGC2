import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainHomepageComponent } from './main-homepage/main-homepage.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { DummyComponent } from './dummy/dummy.component';
import { FacultyLoginComponent } from './faculty-login/faculty-login.component';
import { CoordinatorComponent } from './coordinator/coordinator.component';
import { DugcCoordinatorComponent } from './dugc-coordinator/dugc-coordinator.component';
import { DugcChairmanComponent } from './dugc-chairman/dugc-chairman.component';

@NgModule({
  declarations: [
    AppComponent,
    MainHomepageComponent,
    ForgotPasswordComponent,
    DummyComponent,
    FacultyLoginComponent,
    CoordinatorComponent,
    DugcCoordinatorComponent,
    DugcChairmanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
