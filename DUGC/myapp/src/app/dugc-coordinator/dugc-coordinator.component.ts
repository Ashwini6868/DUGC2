import { Component } from '@angular/core';

@Component({
  selector: 'app-dugc-coordinator',
  templateUrl: './dugc-coordinator.component.html',
  styleUrl: './dugc-coordinator.component.css'
})
export class DugcCoordinatorComponent {
  showSubButtons: boolean = false;
  subButtons: string[] = [];

  toggleSubButtons(buttonType: string) {
    this.showSubButtons = !this.showSubButtons;

    // Define sub-buttons based on the clicked button
    switch (buttonType) {
      case 'ISA':
        this.subButtons = ['View Mark Sheet', 'View Consolidated Mark Sheet', 'View Analysis'];
        break;
      case 'ESA':
        this.subButtons = ['View Mark Sheet', 'View Consolidated Mark Sheet', 'View Analysis'];
        break;
      case 'LAB-CIE':
        this.subButtons = ['View Mark Sheet', 'View Consolidated Mark Sheet', 'View Analysis'];
        break;
      case 'COURSE WITHDRAWAL':
        this.subButtons = [];
        break;
      case 'ELIGIBILITY':
        this.subButtons = [];
        break;
      case 'MAKEUP MINOR':
        this.subButtons = [];
        break;
      case 'CIRCULAR':
        this.subButtons = [];
        break;
      case 'NOTIFICATIONS':
        this.subButtons = [];
        break;
      case 'ADD-COURSE-COORDINATOR':
        this.subButtons = [];
        break;
      default:
        this.subButtons = [];
        break;
    }
  }
}
