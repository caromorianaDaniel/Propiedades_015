import { Component, OnInit } from '@angular/core';

import { Propiedad } from '../propiedades';
import { PropiedadService } from '../propiedad.service';

@Component({
  selector: 'app-propiedades',
  templateUrl: './propiedades.component.html',
  styleUrls: ['./propiedades.component.css'],
})
export class PropiedadesComponent implements OnInit {
  propiedades: Propiedad[];

  constructor(private propiedadService: PropiedadService) {}

  ngOnInit() {
    this.getPropiedades();
  }

  getPropiedades(): void {
    this.propiedadService
      .getPropiedades()
      .subscribe((propiedades) => (this.propiedades = propiedades));
  }

  delete(calle: string, numero: string, codpost: any): void {
    calle = calle.trim();
    numero = numero.trim();
    codpost = Number(codpost);
    this.propiedadService.deletePropiedad(calle, numero, codpost).subscribe();
  }
}
