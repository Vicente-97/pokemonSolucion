import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon } from '../../Interfaces/pokemon';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {
  pokemons: Pokemon[]=[];
  isShown: boolean = false 
  constructor(private pokemonService : PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.getPokemon()
    .subscribe({
      next: (resp)=> this.pokemons= resp
    })
  }

  search(term:string):void{
    this.pokemonService.getPokemon(term)
    .subscribe({
      next: (resp)=> this.pokemons= resp
    })
  }

  toggleShow() {

    this.isShown = ! this.isShown;
    
    }

}
