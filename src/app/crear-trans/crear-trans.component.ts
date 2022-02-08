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

  add(_identificador: string): void {
    _identificador = _identificador.trim();
    if (!_identificador) {
      return;
    }
    this.transaccionService
      .addTransaccion({ _identificador } as Transaccion)
      .subscribe((transaccion) => {
        this.transacciones.push(transaccion);
      });
  }
}
