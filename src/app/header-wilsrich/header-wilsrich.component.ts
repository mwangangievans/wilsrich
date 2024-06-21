import { Component, Input } from '@angular/core';
import { A2Personal } from '../wilsrichInterface';

@Component({
  selector: 'app-header-wilsrich',
  standalone: true,
  imports: [],
  templateUrl: './header-wilsrich.component.html',
  styleUrl: './header-wilsrich.component.scss',
})
export class HeaderWilsrichComponent {
  @Input() personalData!: A2Personal;
}
