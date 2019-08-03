import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { ShellComponent } from './home/shell.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HeroData } from './heroes/hero-data';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    ShellComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    HttpClientInMemoryWebApiModule.forRoot(HeroData),
    AppRoutingModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      name: 'Angular 8 ngRx Example',
      maxAge: 25,
      logOnly: environment.production
    }),
    EffectsModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
