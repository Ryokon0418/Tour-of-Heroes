import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  // CSSが適用される対象を指定
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  // 適用するCSSファイルを指定
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
  constructor() { }

  ngOnInit(): void {
  }

}
