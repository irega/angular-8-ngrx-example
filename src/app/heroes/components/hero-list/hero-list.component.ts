import { Component, Input } from '@angular/core';
import { Hero } from '../../hero';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html'
})
export class HeroListComponent {
  @Input() heroes: Hero[];
}
