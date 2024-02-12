import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuperHeroDetailsComponent } from './super-hero-details/super-hero-details.component';
import { SuperHeroListComponent } from './super-hero-list/super-hero-list.component';

const routes: Routes = [
  { path: '', component: SuperHeroListComponent,title:'Home Page' },
  { path: 'details/:id', 
  component: SuperHeroDetailsComponent,
  title:'Details Page' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
