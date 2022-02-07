import { Component, OnInit } from '@angular/core';

import { Ciudades } from '../ciudades';
import { Propiedad } from '../propiedades';
import { PropiedadService } from '../propiedad.service';

@Component({
  selector: 'app-crear-propiedades',
  templateUrl: './crear-propiedades.component.html',
  styleUrls: ['./crear-propiedades.component.css'],
  template: ``,
})
export class CrearPropiedadesComponent implements OnInit {
  propiedades: Propiedad[];
  ciudades: Ciudades[];

  constructor(private propiedadService: PropiedadService) {}

  ngOnInit() {
    this.getCiudades();
  }
  getCiudades(): void {
    this.propiedadService
      .getCiudades()
      .subscribe((ciudades) => (this.ciudades = ciudades));
  }
  add(_identificador: string): void {
    _identificador = _identificador.trim();
    if (!_identificador) {
      return;
    }
    this.propiedadService
      .addPropiedad({ _identificador } as Propiedad)
      .subscribe((propiedad) => {
        this.propiedades.push(propiedad);
      });
  }
}
