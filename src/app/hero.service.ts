import { Injectable } from '@angular/core';
import { Hero} from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of} from 'rxjs';
import { MessageService } from './message.service'
@Injectable({
  providedIn: 'root'
})
export class HeroService {


  //vai pegar a classe com o modelo de heroi e vai retornar a lista de herois mock


  //comentario anteriro valido até implementar o observable, que é usado para fazer chamada assincrona, mas tambem retornando o mock heroes.
  getHeroes(): Observable<Hero[]> {


    // this.heroes = this.heroService.getHeroes();

    this.messageService.add('HeroService: chamei os herois');
    this.messageService.add('testeste aewww');
    this.messageService.add('faz um for nas mensagens')


    return of (HEROES);
  }


  //botar dentro do construtor o parametro que declara a propriedade do message service.
  constructor( private messageService: MessageService) { }
}
