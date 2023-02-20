import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../../Interfaces/pokemon';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [
  ]
})
export class ListComponent implements OnInit {

  
  @Input() pokemons: Pokemon[] = []

  constructor(private servicePok :PokemonService) { }

  ngOnInit(): void {
   
  }


  
}
