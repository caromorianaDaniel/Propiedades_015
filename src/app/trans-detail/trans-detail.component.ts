import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Transaccion } from '../transacciones';
import { TransaccionService } from '../transaccion.service';

@Component({
  selector: 'app-trans-detail',
  templateUrl: './trans-detail.component.html',
  styleUrls: ['./trans-detail.component.css'],
})
export class TransDetailComponent implements OnInit {
  @Input() transaccion: Transaccion;

  constructor(
    private route: ActivatedRoute,
    private transaccionService: TransaccionService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getTransaccion();
  }

  getTransaccion(): void {
    const DNI: string = this.route.snapshot.paramMap.get('_DNI');
    this.transaccionService
      .getTransaccion(DNI)
      .subscribe((transaccion) => (this.transaccion = transaccion));
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.transaccionService
      .updateTransaccion(this.transaccion)
      .subscribe(() => this.goBack());
  }
}
