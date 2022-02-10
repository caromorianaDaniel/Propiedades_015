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
    const calle: string = this.route.snapshot.paramMap.get('calle');
    const numero: string = this.route.snapshot.paramMap.get('numero');
    const codpost: number = Number(this.route.snapshot.paramMap.get('codpost'));
    this.propiedadService
      .getPropiedad(calle, numero, codpost)
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
