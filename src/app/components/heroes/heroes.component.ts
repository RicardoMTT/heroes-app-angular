import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

//Servicio
import { HeroesService,Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent{

  heroes:Heroe[] = [];
  carga:boolean = false;
  constructor(private heroesService:HeroesService,private router:Router) { 
    this.heroes = heroesService.getHeroes();
    console.log(this.heroes);
  }

  cargarHeroes(){
    this.carga = !this.carga;
    this.heroes =  this.heroesService.getHeroes();
  }

  verHeroe(i:number){
    this.router.navigate(['/heroe',i]);//Me redirecciona a la ruta /heroe/i
  }

}
