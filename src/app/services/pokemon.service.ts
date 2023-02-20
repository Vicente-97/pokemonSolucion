import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from '../Interfaces/pokemon';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http : HttpClient) { }
  

  httpOption={
    headers: new HttpHeaders({
      'Content-type':'application/json'
    })
  }

  getPokemon(busqueda:string=""):Observable<Pokemon[]>{
    if(busqueda ===""){
      return this.http.get<Pokemon[]>(environment.Apiurl)
    }else{
      return this.http.get<Pokemon[]>(`${environment.Apiurl}?q=${busqueda}`)
    }
  }

  getPoke(id:string):Observable<Pokemon>{
    return this.http.get<Pokemon>(`${environment.Apiurl}/${id}`)
  }

  savePokemon(pokemon:Pokemon){
    this.http.put(`${environment.Apiurl}/${pokemon.id}`,pokemon,this.httpOption)
    .subscribe({
      next: (resp)=> console.log(resp)
      
    })
  }
  
}
