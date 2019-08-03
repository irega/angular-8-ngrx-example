import { CounterShellComponent } from './containers/counter-shell/counter-shell.component';
import { CounterComponent } from './components/counter/counter.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { counterRoutes } from './counter-routes';
import { StoreModule } from '@ngrx/store';
import { reducer } from './state/reducer';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(counterRoutes),
    StoreModule.forFeature('counter', reducer)
  ],
  declarations: [
    CounterShellComponent,
    CounterComponent
  ]
})
export class CounterModule { }
