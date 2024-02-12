import { Component, inject } from '@angular/core';
import { SuperHero } from '../models/super-hero';
import { SuperHeroService } from '../services/super-hero.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-super-hero-details',
  templateUrl: './super-hero-details.component.html',
  styleUrl: './super-hero-details.component.css'
})
export class SuperHeroDetailsComponent {
  superHero: SuperHero | undefined;
  route: ActivatedRoute = inject(ActivatedRoute);


  constructor(private superHeroService: SuperHeroService){
    const superHeroId = Number(this.route.snapshot.params["id"]);
    this.superHeroService.getSuperHeroById(superHeroId).subscribe((result: SuperHero)=>(this.superHero = result, console.log("rezultat",result)))
  }

}
