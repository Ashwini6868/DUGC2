import { Component } from '@angular/core';

@Component({
  selector: 'app-coordinator',
  templateUrl: './coordinator.component.html',
  styleUrl: './coordinator.component.css'
})
export class CoordinatorComponent {
  showSubButtons: boolean = false;
  subButtons: string[] = [];

  toggleSubButtons(buttonType: string) {
    this.showSubButtons = !this.showSubButtons;

    // Define sub-buttons based on the clicked button
    switch (buttonType) {
      case 'ISA':
        this.subButtons = ['Upload Mark Sheet', 'View Mark Sheet', 'Delete Mark Sheet', 'Generate Consolidated Mark Sheet', 'View Analysis'];
        break;
      case 'ESA':
        this.subButtons = ['Upload Mark Sheet', 'View Mark Sheet', 'Delete Mark Sheet', 'Generate Consolidated Mark Sheet', 'View Analysis'];
        break;
      case 'LAB-CIE':
        this.subButtons = ['Upload Mark Sheet', 'View Mark Sheet', 'Delete Mark Sheet', 'Generate Consolidated Mark Sheet', 'View Analysis'];
        break;
      case 'NOTIFICATIONS':
        this.subButtons = [];
        break;
      case 'ADD-FACULTY':
         this.subButtons = [];
         break;  
      default:
        this.subButtons = [];
        break;
    }
  }
}
