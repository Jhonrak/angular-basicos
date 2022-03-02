
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Personaje } from '../interfaces/atla.interface';
import { AtlaService } from '../services/atla.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {

  @Input()
  personajes: Personaje[] = []

  @Input() nuevo: Personaje = {
    nombre: '',
    edad: 0
  }

  // @Output()
  // onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  constructor (private atlaService: AtlaService) {}

  //Inserción de objeto nuevo al arreglo
  agregar(  ) {
    if (this.nuevo.nombre.trim().length === 0){
      return;
    }
    // this.onNuevoPersonaje.emit( this.nuevo )
    this.atlaService.agregarPersonaje( this.nuevo );

    this.nuevo = {
      nombre: '',
      edad: 0
    }

  }

}
