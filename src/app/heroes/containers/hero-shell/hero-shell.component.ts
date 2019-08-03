import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Hero } from '../../hero';
import { Observable } from 'rxjs';
import { HeroState } from '../../state';
import { Store, select } from '@ngrx/store';
import * as heroActions from './../../state/actions';
import * as heroSelectors from './../../state/selectors';

@Component({
  selector: 'app-hero-shell',
  templateUrl: './hero-shell.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroShellComponent implements OnInit {
  heroes$: Observable<Hero[]>;

  constructor(private store: Store<HeroState>) { }

  ngOnInit() {
    this.store.dispatch(new heroActions.Load());
    this.heroes$ = this.store.pipe(select(heroSelectors.getHeroes));
  }
}
