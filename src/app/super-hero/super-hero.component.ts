import { Component, Input } from '@angular/core';
import { SuperHero } from '../models/super-hero';
@Component({
  selector: 'app-super-hero',
  templateUrl: './super-hero.component.html',
  styleUrl: './super-hero.component.css'
})
export class SuperHeroComponent {
  @Input() hero!: SuperHero
}
