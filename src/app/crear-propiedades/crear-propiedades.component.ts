import { Component, OnInit } from '@angular/core';

import { Ciudades } from '../ciudades';
import { PropiedadService } from '../propiedad.service';

@Component({
  selector: 'app-crear-propiedades',
  templateUrl: './crear-propiedades.component.html',
  styleUrls: ['./crear-propiedades.component.css'],
})
export class CrearPropiedadesComponent implements OnInit {
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
}
