import { Component, OnInit } from '@angular/core';

import { Ciudades } from '../ciudades';
import { Propiedad } from '../propiedades';
import { Solar } from '../solares';
import { Propietario } from '../propietarios';
import { PropiedadService } from '../propiedad.service';
import { PropietarioService } from '../propietario.service';

@Component({
  selector: 'app-crear-propiedades',
  templateUrl: './crear-propiedades.component.html',
  styleUrls: ['./crear-propiedades.component.css'],
  template: ``,
})
export class CrearPropiedadesComponent implements OnInit {
  propiedades: Propiedad[];
  ciudades: Ciudades[];
  propietarios: Propietario[];

  constructor(
    private propiedadService: PropiedadService,
    private propietarioService: PropietarioService
  ) {}

  ngOnInit() {
    this.getCiudades();
  }
  getCiudades(): void {
    this.propiedadService
      .getCiudades()
      .subscribe((ciudades) => (this.ciudades = ciudades));
  }
  getPropiedades(): void {
    this.propiedadService
      .getPropiedades()
      .subscribe((propiedades) => (this.propiedades = propiedades));
  }
  getPropietarios(): void {
    this.propietarioService
      .getPropietarios()
      .subscribe((propietarios) => (this.propietarios = propietarios));
  }
  add_sol(
    numero: string,
    calle1: string,
    calle2: string | undefined,
    calle3: string | undefined,
    calle4: string | undefined,
    codpost: any,
    preciom: any,
    metrosc: any,
    propietario: string,
    edificable: any,
    luz: any,
    agua: any,
    lejania: any
  ): void {
    (numero = numero.trim()),
      (calle1 = calle1.trim()),
      (calle2 = calle2.trim()),
      (calle3 = calle3.trim()),
      (calle4 = calle4.trim()),
      (codpost = Number(codpost)),
      (preciom = Number(preciom)),
      (metrosc = Number(metrosc)),
      (propietario = propietario.trim()),
      (edificable = Boolean(edificable)),
      (luz = Boolean(luz)),
      (agua = Boolean(agua)),
      (lejania = Number(lejania));

    let calles = [calle1, calle2, calle3, calle4];
    if (
      !numero ||
      !calle1 ||
      !codpost ||
      !preciom ||
      !metrosc ||
      !propietario ||
      !edificable ||
      !luz ||
      !agua ||
      !lejania
    ) {
      return;
    }
    let identificador = `C/ ${calle1}, Nº ${numero}, ${codpost}`;
    const Propiedad: any = {
      identificador: identificador,
      tipo: 'Solar',
      numero: numero,
      calles: calles,
      codpost: codpost,
      preciom: preciom,
      metrosc: metrosc,
      propietario: propietario,
      edificable: edificable,
      luz: luz,
      agua: agua,
      lejania: lejania,
    };
    this.propiedadService.addPropiedad(Propiedad).subscribe((propiedad) => {
      this.propiedades.push(propiedad);
    });
  }

  add_viv(
    numero: string,
    calle1: string,
    calle2: string | undefined,
    calle3: string | undefined,
    calle4: string | undefined,
    codpost: any,
    preciom: any,
    metrosc: any,
    propietario: string,
    antiguedad: any,
    numHab: any,
    numBa: any,
    garage: any,
    horno: any,
    micro: any,
    lavavajillas: any,
    frigorifico: any
  ): void {
    (numero = numero.trim()),
      (calle1 = calle1.trim()),
      (calle2 = calle2.trim()),
      (calle3 = calle3.trim()),
      (calle4 = calle4.trim()),
      (codpost = Number(codpost)),
      (preciom = Number(preciom)),
      (metrosc = Number(metrosc)),
      (propietario = propietario.trim()),
      (antiguedad = Boolean(antiguedad)),
      (numHab = Boolean(numHab)),
      (numBa = Boolean(numBa)),
      (garage = Boolean(garage)),
      (horno = Boolean(horno)),
      (micro = Boolean(micro)),
      (lavavajillas = Boolean(lavavajillas)),
      (frigorifico = Boolean(frigorifico));

    let calles = [calle1, calle2, calle3, calle4];
    if (
      !numero ||
      !calles ||
      !codpost ||
      !preciom ||
      !metrosc ||
      !propietario ||
      !antiguedad ||
      !numHab ||
      !numBa ||
      !garage ||
      !horno ||
      !micro ||
      !lavavajillas ||
      !frigorifico
    ) {
      return;
    }
    let identificador = `C/ ${calle1}, Nº ${numero}, ${codpost}`;
    let cocina = [horno, micro, lavavajillas, frigorifico];
    const Propiedad: any = {
      identificador: identificador,
      tipo: 'Vivienda',
      numero: numero,
      calles: calles,
      codpost: codpost,
      preciom: preciom,
      metrosc: metrosc,
      propietario: propietario,
      antiguedad: antiguedad,
      numHab: numHab,
      numBa: numBa,
      garage: garage,
      cocina: cocina,
    };
    this.propiedadService.addPropiedad(Propiedad).subscribe((propiedad) => {
      this.propiedades.push(propiedad);
    });
  }
}
