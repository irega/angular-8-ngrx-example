import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { heroRoutes } from './hero-routes';
import { StoreModule } from '@ngrx/store';
import { HeroShellComponent } from './containers/hero-shell/hero-shell.component';
import { HeroListComponent } from './components/hero-list/hero-list.component';
import { reducer } from './state/reducer';
import { SharedModule } from '../shared/shared.module';
import { EffectsModule } from '@ngrx/effects';
import { HeroEffects } from './state/effects';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(heroRoutes),
    StoreModule.forFeature('heroes', reducer),
    EffectsModule.forFeature(
      [HeroEffects]
    ),
  ],
  declarations: [
    HeroShellComponent,
    HeroListComponent
  ]
})
export class HeroModule { }
