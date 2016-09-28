import { Component, OnInit } from '@angular/core';

import {Hero} from './hero';
import { HeroService } from './hero.service';


@Component({
    selector: 'my-heroes',
    templateUrl: 'app/views/heroes.component.html',
    styleUrls: ['app/css/heroes.component.css'],

})

export class HeroesComponent implements OnInit {
    ngOnInit(): void {
        this.getHeroes();    
    }

    title = 'Tour of Heros';
    heroes: Hero[];
    selectedHero: Hero;


    constructor(private heroService: HeroService) { }

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }
    getHeroes(): void {
        this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
    }
    

}