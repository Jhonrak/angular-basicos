import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/atla.interface';

@Injectable()
export class AtlaService {

    private _personajes: Personaje[] = [
        {
          nombre: 'Aang',
          edad: 14
        },
        {
          nombre: 'Katara',
          edad: 16
        }
      ];

      get personajes(): Personaje[] {
          return [...this._personajes];
      }

    constructor() {}

    agregarPersonaje ( arg: Personaje ) {
        this._personajes.push( arg );
    }

}
