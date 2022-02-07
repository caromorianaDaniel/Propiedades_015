import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Propiedad } from '../propiedades';
import { PropiedadService } from '../propiedad.service';

@Component({
  selector: 'app-propiedad-detail',
  templateUrl: './propd-detail.component.html',
  styleUrls: ['./propd-detail.component.css'],
})
export class PropdDetailComponent implements OnInit {
  @Input() propiedad: Propiedad;

  constructor(
    private route: ActivatedRoute,
    private propiedadService: PropiedadService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getPropiedad();
  }

  getPropiedad(): void {
    const identificador: string =
      this.route.snapshot.paramMap.get('_identificador');
    this.propiedadService
      .getPropiedad(identificador)
      .subscribe((propiedad) => (this.propiedad = propiedad));
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.propiedadService
      .updatePropiedad(this.propiedad)
      .subscribe(() => this.goBack());
  }
}
