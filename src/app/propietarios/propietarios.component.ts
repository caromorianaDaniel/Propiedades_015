import { Component, OnInit } from '@angular/core';

import { Propietario } from '../propietarios';
import { PropietarioService } from '../propietario.service';

@Component({
  selector: 'app-propietarios',
  templateUrl: './propietarios.component.html',
  styleUrls: ['./propietarios.component.css'],
})
export class PropietariosComponent implements OnInit {
  propietarios: Propietario[];

  constructor(private propietarioService: PropietarioService) {}

  ngOnInit() {
    this.getPropietarios();
  }

  getPropietarios(): void {
    this.propietarioService
      .getPropietarios()
      .subscribe((propietarios) => (this.propietarios = propietarios));
  }

  add(_DNI: string): void {
    _DNI = _DNI.trim();
    if (!_DNI) {
      return;
    }
    this.propietarioService
      .addPropietario({ _DNI } as Propietario)
      .subscribe((propietario) => {
        this.propietarios.push(propietario);
      });
  }

  delete(propietario: Propietario): void {
    this.propietarios = this.propietarios.filter((h) => h !== propietario);
    this.propietarioService.deletePropietario(propietario).subscribe();
  }
}
