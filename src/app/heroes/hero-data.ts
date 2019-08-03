import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

export class HeroData implements InMemoryDbService {

  createDb() {
    const heroes: Hero[] = [
      {
        id: 1,
        name: 'Spiderman'
      },
      {
        id: 2,
        name: 'Superman'
      }
    ];
    return { heroes };
  }
}
