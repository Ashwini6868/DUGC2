import { Component, booleanAttribute } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-faculty-login',
  templateUrl: './faculty-login.component.html',
  styleUrl: './faculty-login.component.css'
})
export class FacultyLoginComponent {

  constructor(private router: Router) {}


  showSubButtons: boolean = false;
  subButtons: string[] = [];
  showFacultyForm: boolean = true;

  toggleSubButtons(buttonType: string) {
    this.showSubButtons = !this.showSubButtons;

    // Define sub-buttons based on the clicked button
    switch (buttonType) {
      case 'ISA':
        this.subButtons = ['Upload Mark Sheet', 'View Mark Sheet', 'Delete Mark Sheet'];
        break;
      case 'ESA':
        this.subButtons = ['Upload Mark Sheet', 'View Mark Sheet', 'Delete Mark Sheet'];
        break;
      case 'LAB-CIE':
        this.subButtons = ['Upload Mark Sheet', 'View Mark Sheet', 'Delete Mark Sheet'];
        break;
      case 'NOTIFICATIONS':
        this.subButtons = [];
        break;
      default:
        this.subButtons = [];
        break;
    }
  }

  onClickFaculty(){
    this.router.navigate(['/faculty-log']);
    this.showFacultyForm=false;
  }
}
