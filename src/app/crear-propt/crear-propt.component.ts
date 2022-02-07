import { Component, OnInit } from '@angular/core';

import { Ciudades } from '../ciudades';
import { PropiedadService } from '../propiedad.service';

@Component({
  selector: 'app-crear-propt',
  templateUrl: './crear-propt.component.html',
  styleUrls: ['./crear-propt.component.css'],
})
export class CrearProptComponent implements OnInit {
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
