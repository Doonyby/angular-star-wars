import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

import { Hero } from './models';

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
    new Hero(1, 'Windstorm'), 
    new Hero(13, 'Bombasto'), 
    new Hero(44, 'Magneta'),
    new Hero(25, 'Tornado') 
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
