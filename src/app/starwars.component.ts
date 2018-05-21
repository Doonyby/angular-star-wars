import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

import { HeroClass } from './hero-class';

@Component({
  selector: 'star-wars-root',
  templateUrl: './starwars.component.html',
  styleUrls: ['./starwars.component.scss'],
  providers: []
})

export class StarWarsComponent implements OnInit {
  customSubtitle: string = 'This is my custom subtitle';
  pageTitle: string = 'Star Wars API Access';
  subTitleMessage: string = 'This is my subtitle';
  showSubTitle: boolean = false;
  heroes = [
    new HeroClass(1, 'Windstorm'), 
    new HeroClass(13, 'Bombasto'), 
    new HeroClass(44, 'Magneta'),
    new HeroClass(25, 'Tornado') 
  ];
  favoriteHero = this.heroes[0];
  buttonStyle = {
    color: 'blue'
  }

  ngOnInit() {
    console.log('starting star wars app');
  }

  changeFavoriteHero(index) {
    this.favoriteHero = this.heroes[index];
  }

  onBtnClick(): void {
    this.showSubTitle = !this.showSubTitle;
  }
}
