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

  delete(propiedad: Propiedad): void {
    this.propiedades = this.propiedades.filter((h) => h !== propiedad);
    this.propiedadService.deletePropiedad(propiedad).subscribe();
  }
}
