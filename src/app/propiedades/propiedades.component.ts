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

  /*add(id: string): void {
    id = id.trim();
    if (!id) {
      return;
    }
    this.propiedadService
      .addPropiedad({id } as Propiedad)
      .subscribe((propiedad) => {
        this.propiedades.push(propiedad);
      });
  }*/

  delete(numero: string, calle: string, codpost: any): void {
    numero = numero.trim();
    calle = calle.trim();
    codpost = Number(codpost);
    let identificador = `C/ ${calle} Nº ${numero}, ${codpost}`;
    this.propiedadService.deletePropiedad(identificador).subscribe();
  }
}
