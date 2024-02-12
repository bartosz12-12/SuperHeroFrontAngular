import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SuperHeroComponent } from './super-hero/super-hero.component';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { SuperHeroDetailsComponent } from './super-hero-details/super-hero-details.component';
import { SuperHeroListComponent } from './super-hero-list/super-hero-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SuperHeroComponent,
    SuperHeroDetailsComponent,
    SuperHeroListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
