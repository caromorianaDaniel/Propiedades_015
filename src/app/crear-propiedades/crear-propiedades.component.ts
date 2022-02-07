import { Component, OnInit } from '@angular/core';

import { Ciudades } from '../ciudades';
import { PropiedadService } from '../propiedad.service';

@Component({
  selector: 'app-crear-propiedades',
  templateUrl: './crear-propiedades.component.html',
  styleUrls: ['./crear-propiedades.component.css'],
  template: ``,
})
export class CrearPropiedadesComponent implements OnInit {
  ciudades: Ciudades[];
  solar = false;
  viv = false;

  constructor(private propiedadService: PropiedadService) {}

  ngOnInit() {
    this.getCiudades();
  }
  getCiudades(): void {
    this.propiedadService
      .getCiudades()
      .subscribe((ciudades) => (this.ciudades = ciudades));
  }
  siguiente(tipo: string) {
    if (tipo == 'Solar') {
      return true;
    } else if (tipo == 'Vivienda') {
      return false;
    }
  }
}
