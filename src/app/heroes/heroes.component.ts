import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes' ;

@Component({
  // CSSが適用される対象を指定
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  // 適用するCSSファイルを指定
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes = HEROES;
  selectedHero?: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
