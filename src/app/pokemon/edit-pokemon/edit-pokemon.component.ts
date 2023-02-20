import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../Interfaces/pokemon';
import { ActivatedRoute,  Router} from '@angular/router';
import { PokemonService } from '../../services/pokemon.service';
@Component({
  selector: 'app-edit-pokemon',
  templateUrl: './edit-pokemon.component.html',
  styles: [
  ]
})
export class EditPokemonComponent implements OnInit {

  pokemon!:Pokemon;
  constructor(private route: ActivatedRoute, private pokemonSer: PokemonService, private router: Router) { }

  ngOnInit(): void {
    this.pokemonSer.getPoke(this.route.snapshot.params['pokemon']).subscribe({
      next:(resp)=> {
        this.pokemon=resp

      },
    })

  }

  save(){
    this.pokemonSer.savePokemon(this.pokemon)
    this.router.navigate(['/'])
    
  }

}
