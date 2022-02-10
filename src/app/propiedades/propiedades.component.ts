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
    console.log(this.propiedades);
  }

  getPropiedades(): void {
    this.propiedadService
      .getPropiedades()
      .subscribe((propiedades) => (this.propiedades = propiedades));
  }

  delete(identificador: string): void {
    identificador = identificador.trim();
    this.propiedadService.deletePropiedad(identificador).subscribe();
  }
}
