import { Component, OnInit } from '@angular/core';

import { Propiedad } from '../propiedades';
import { PropiedadService } from '../propiedad.service';
import { Propietario } from '../propietarios';
import { PropietarioService } from '../propietario.service';
import { Transaccion } from '../transacciones';
import { TransaccionService } from '../transaccion.service';
import { Ciudades } from '../ciudades';

@Component({
  selector: 'app-crear-trans',
  templateUrl: './crear-trans.component.html',
  styleUrls: ['./crear-trans.component.css'],
})
export class CrearTransComponent implements OnInit {
  propiedades: Propiedad[];
  propietarios: Propietario[];
  transacciones: Transaccion[];
  ciudades: Ciudades[];

  constructor(
    private propiedadService: PropiedadService,
    private propietarioService: PropietarioService,
    private transaccionService: TransaccionService
  ) {}

  ngOnInit() {
    //this.getPropiedades();
    //this.getPropietarios();
    //this.getTransacciones();
    //this.getCiudades();
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

  getPropietarios(): void {
    this.propietarioService
      .getPropietarios()
      .subscribe((propietarios) => (this.propietarios = propietarios));
  }

  getTransacciones(): void {
    this.transaccionService
      .getTransacciones()
      .subscribe((transacciones) => (this.transacciones = transacciones));
  }

  save(
    tipo: string,
    DNIc: string,
    DNIv: string,
    idpropd: string,
    plazos: any
  ): void {
    tipo = tipo.trim();
    DNIc = DNIc.trim();
    DNIv = DNIv.trim();
    idpropd = idpropd.trim();
    plazos = Number(plazos);
    let fecha = new Date();
    let precio = 1;
    let pago = precio / plazos;

    if (!tipo || !DNIc || !DNIv || !idpropd || !plazos) {
      return;
    }
    this.transaccionService
      .addTransaccion({} as Transaccion)
      .subscribe((transaccion) => {
        this.transacciones.push(transaccion);
      });
  }
}
