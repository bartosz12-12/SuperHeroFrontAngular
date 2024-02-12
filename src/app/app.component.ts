import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <header class="header" [routerLink]="['']">Zbiór Super Bohaterów</header>
    <router-outlet></router-outlet>
  </div>
  `,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'superHero';

  constructor() {}
}
