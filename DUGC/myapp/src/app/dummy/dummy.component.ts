import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrl: './dummy.component.css'
})
export class DummyComponent {
  constructor(private router: Router) {}
  showLoginForm: boolean = true;
  onLoginClick() {
    
    // Perform any additional actions here (e.g., form validation)

    // Navigate to the main homepage component
    this.router.navigate(['/home']);
    this.showLoginForm=false;
  }
  
  
}
