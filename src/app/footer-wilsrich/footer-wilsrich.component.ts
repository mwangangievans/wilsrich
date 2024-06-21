import { Component, Input } from '@angular/core';
import { A2Personal } from '../wilsrichInterface';

@Component({
  selector: 'app-footer-wilsrich',
  standalone: true,
  imports: [],
  templateUrl: './footer-wilsrich.component.html',
  styleUrl: './footer-wilsrich.component.scss',
})
export class FooterWilsrichComponent {
  @Input() personalData!: A2Personal;
}
