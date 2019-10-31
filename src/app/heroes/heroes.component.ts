import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
// import {HEROES} from '../mock-heroes
import { HeroService } from  '../hero.service'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

// variavelHeroes = HEROES;

variavelHeroes: Hero[];
selectedHero: Hero;

// variavelHero: Hero = {

//   id: 1,
//   name: 'Windstorm'
//  };


//injetando heroservice no construtor, chamando a classe
  constructor( private heroService: HeroService) { 


  }

  onSelect(hero: Hero): void {

    this.selectedHero = hero;
  }

  getHeroes(): void {

    // this.variavelHeroes = this.heroService.getHeroes();

    this.heroService.getHeroes()
    .subscribe(heroes => this.variavelHeroes = heroes);
  }

  //bom local para botar lógica iniciação
  ngOnInit() {

    this.getHeroes();
  }



}
