import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  // tslint:disable-next-line:typedef
  createDb() {
    const heroes = [
      { id: 11, name: 'Roland'},
      { id: 12, name: 'Bellara'},
      { id: 13, name: 'Roger'},
      { id: 14, name: 'Taneda'},
      { id: 15, name: 'Kharannah'},
      { id: 16, name: 'Azariel'},
      { id: 17, name: 'Lucky'},
      { id: 18, name: 'Silver Moon'},
      { id: 19, name: 'Sharazar'},
      { id: 20, name: 'Rok'}
    ];
    return {heroes};
  }
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
