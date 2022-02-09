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
    const numero: string = this.route.snapshot.paramMap.get('_numero');
    const calle: string = this.route.snapshot.paramMap.get('_calles["0"]');
    const codpost: number = Number(
      this.route.snapshot.paramMap.get('_codpost')
    );
    this.propiedadService
      .getPropiedad(numero, calle, codpost)
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
