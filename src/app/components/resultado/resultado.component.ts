import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe,HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent {
  heroeArr : Heroe[];
  terminoBuscar:string;
  constructor(private activatedRoute:ActivatedRoute,
              private heroesService:HeroesService) {
    this.activatedRoute.params.subscribe(params => {
      this.terminoBuscar = params['termino'];
      this.heroeArr = this.heroesService.buscarHeroe(params['termino']);
      console.log('arr',this.heroeArr);
    });
   }

}
