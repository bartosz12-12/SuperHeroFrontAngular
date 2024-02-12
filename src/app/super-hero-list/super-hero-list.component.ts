import { Component, OnInit, inject } from '@angular/core';
import { SuperHero } from '../models/super-hero';
import { SuperHeroService } from '../services/super-hero.service';
@Component({
  selector: 'app-super-hero-list',
  templateUrl: './super-hero-list.component.html',
  styleUrl: './super-hero-list.component.css',
})
export class SuperHeroListComponent implements OnInit {
  superHero: SuperHero[] = [];
  loading:boolean = true

  constructor(private superHeroService: SuperHeroService) {}

  ngOnInit(): void {
    this.superHeroService
      .getAllSuperHeroes()
      .subscribe(
        (result: SuperHero[]) => (
          (this.superHero = result), this.loading = false
        )
      );
  }
}
