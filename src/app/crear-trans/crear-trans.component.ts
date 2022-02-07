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
    this.gettodos();
  }
  gettodos(): void {
    this.propiedadService
      .getPropiedades()
      .subscribe((propiedades) => (this.propiedades = propiedades));
    this.propietarioService
      .getPropietarios()
      .subscribe((propietarios) => (this.propietarios = propietarios));
    this.transaccionService
      .getTransacciones()
      .subscribe((transacciones) => (this.transacciones = transacciones));
    this.propiedadService
      .getCiudades()
      .subscribe((ciudades) => (this.ciudades = ciudades));
  }
}
