import { Component } from '@angular/core';
import { AtlaService } from '../services/atla.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent {

  // @Input()
  // personajes: Personaje[] = []

  get personajes() {
    return this.atlaService.personajes;
  }
  
  constructor ( private atlaService: AtlaService ) {
  }

}
