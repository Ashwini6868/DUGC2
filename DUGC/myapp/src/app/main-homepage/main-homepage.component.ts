import { Component } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-main-homepage',
  templateUrl: './main-homepage.component.html',
  styleUrl: './main-homepage.component.css'
})
export class MainHomepageComponent {

  constructor(private router: Router) {}
  public userMail="";

  // redirectToForgotPassword() {
  //   // Navigate to the forgot password route
  //   this.router.navigate(['/forgot-password']);
  // }

  showLoginForm: boolean = true; // Initially, show the login form

  toggleForm() {
    
    this.router.navigate(['/forgot-password'])
    this.showLoginForm = false;
  }

  onCLickLoginHome(){
    if(this.userMail=="dugc@123"){
      this.router.navigate(['/dugc-coordinator-log']);
      this.showLoginForm=false;
    }
    else if(this.userMail=="co@123")
    {
      this.router.navigate(['/coordinator-log']);
      this.showLoginForm=false;
    }
    else if(this.userMail=="admin@123")
    {
      this.router.navigate(['/dugc-chairman-log']);
      this.showLoginForm=false;
    }
    else if(this.userMail=="fac@123"){
      this.router.navigate(['/faculty-log']);
      this.showLoginForm=false;
    }

  }
}
