import { Component, OnInit } from '@angular/core';

import { Transaccion } from '../transacciones';
import { TransaccionService } from '../transaccion.service';

@Component({
  selector: 'app-transacciones',
  templateUrl: './transacciones.component.html',
  styleUrls: ['./transacciones.component.css'],
})
export class TransaccionesComponent implements OnInit {
  transacciones: Transaccion[];

  constructor(private transaccionService: TransaccionService) {}

  ngOnInit() {
    this.getTransacciones();
  }

  getTransacciones(): void {
    this.transaccionService
      .getTransacciones()
      .subscribe((transacciones) => (this.transacciones = transacciones));
  }

  delete(transaccion: Transaccion): void {
    this.transacciones = this.transacciones.filter((h) => h !== transaccion);
    this.transaccionService.deleteTransaccion(transaccion).subscribe();
  }
}
