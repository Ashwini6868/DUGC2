import { Component } from '@angular/core';

@Component({
  selector: 'app-dugc-chairman',
  templateUrl: './dugc-chairman.component.html',
  styleUrl: './dugc-chairman.component.css'
})
export class DugcChairmanComponent {
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
      case 'ADD-DUGC-COORDINATOR':
        this.subButtons = [];
        break;
      default:
        this.subButtons = [];
        break;
    }
  }
}
