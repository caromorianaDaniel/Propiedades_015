import { Component, OnInit } from '@angular/core';

import { Propiedad } from '../propiedades';
import { Propietario } from '../propietarios';
import { Ciudades } from '../ciudades';
import { PropiedadService } from '../propiedad.service';
import { PropietarioService } from '../propietario.service';

@Component({
  selector: 'app-crear-propt',
  templateUrl: './crear-propt.component.html',
  styleUrls: ['./crear-propt.component.css'],
})
export class CrearProptComponent implements OnInit {
  propiedades: Propiedad[];
  propietarios: Propietario[];
  ciudades: Ciudades[];

  constructor(
    private propiedadService: PropiedadService,
    private propietarioService: PropietarioService
  ) {}

  ngOnInit() {
    this.getCiudades();
  }

  getPropiedades(): void {
    this.propiedadService
      .getPropiedades()
      .subscribe((propiedades) => (this.propiedades = propiedades));
  }

  getCiudades(): void {
    this.propiedadService
      .getCiudades()
      .subscribe((ciudades) => (this.ciudades = ciudades));
  }
  save(DNI: string, nom: string, ape: string, nac: any, idpropd: string): void {
    (DNI = DNI.trim()),
      (nom = nom.trim()),
      (ape = ape.trim()),
      (idpropd = idpropd.trim()),
      (nac = Date.parse(nac));
    if (!DNI || !nom || !ape || !nac || !idpropd) {
      return;
    }
    const Propietario: any = {
      DNI: DNI,
      nombre: nom,
      apellidos: ape,
      nacimiento: nac,
      propiedades: idpropd,
    };
    this.propietarioService
      .addPropietario(Propietario)
      .subscribe((propietario) => {
        this.propietarios.push(propietario);
      });
  }
}
