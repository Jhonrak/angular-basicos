import { Component } from '@angular/core';
import { Personaje } from '../interfaces/atla.interface';
import { AtlaService } from '../services/atla.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent { 

  nuevo: Personaje = {
    nombre: 'Zuko',
    edad: 18
  }
  
  /* agregarNuevoPersonaje (arg: Personaje) {
  //   this.personajes.push(arg)   
   }*/ 
  constructor () {
  }
}
