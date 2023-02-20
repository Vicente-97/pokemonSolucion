import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { PokemonModule } from '../pokemon/pokemon.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PokemonModule,
    RouterModule
  ],exports:[
    HomeComponent
  ]
})
export class MainModule { }
