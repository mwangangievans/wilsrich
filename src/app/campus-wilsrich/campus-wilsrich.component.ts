import { Component, Input } from '@angular/core';
import { CampusData } from '../wilsrichInterface';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-campus-wilsrich',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, CommonModule],
  templateUrl: './campus-wilsrich.component.html',
  styleUrl: './campus-wilsrich.component.scss',
})
export class CampusWilsrichComponent {
  @Input() campusData!: CampusData[];

  selectedCampus!: CampusData;

  constructor() {}

  onCampusSelectionChange(event: any) {
    this.selectedCampus = event.value;
  }
}
