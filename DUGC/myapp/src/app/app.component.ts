import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DUGC';
  constructor(private router: Router) {}

  onLogoClick() {
    this.router.navigate(['/home']);
  }
  
}
