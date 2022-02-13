import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Propietario } from '../propietarios';
import { PropietarioService } from '../propietario.service';

@Component({
  selector: 'app-propietario-detail',
  templateUrl: './propt-detail.component.html',
  styleUrls: ['./propt-detail.component.css'],
})
export class ProptDetailComponent implements OnInit {
  @Input() propietario: Propietario;

  constructor(
    private route: ActivatedRoute,
    private propietarioService: PropietarioService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getPropietario();
  }

  getPropietario(): void {
    const DNI: string = this.route.snapshot.paramMap.get('_DNI');
    this.propietarioService
      .getPropietario(DNI)
      .subscribe((propietario) => (this.propietario = propietario));
  }

  goBack(): void {
    this.location.back();
  }
}
