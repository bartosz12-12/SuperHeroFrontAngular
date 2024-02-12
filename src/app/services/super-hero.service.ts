import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { SuperHero } from '../models/super-hero';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SuperHeroService {
  private url = "https://localhost:7020/api/SuperHeroControler/getAll";
  private urlGetId = "https://localhost:7020/api/SuperHeroControler/Get";
  protected superHero: SuperHero[] = [];
  private http = inject(HttpClient)

  constructor(){}

 getAllSuperHeroes(){
    const data = this.http.get<SuperHero[]>(this.url)
    return data
  }

  getSuperHeroById(id:Number){
    const data = this.http.get<SuperHero>(`${this.urlGetId}/${id}`);
    return data
  }
  
}
