import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Solar } from '../solares';
import { Vivienda } from '../viviendas';
import { PropiedadService } from '../propiedad.service';

@Component({
  selector: 'app-propiedad-detail',
  templateUrl: './propd-detail.component.html',
  styleUrls: ['./propd-detail.component.css'],
})
export class PropdDetailComponent implements OnInit {
  @Input()
  propiedad: any;

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
      .subscribe((propiedades) => (this.propiedad = propiedades));
    if (this.propiedad._tipo == 'Solar') {
      const Propd: any = {
        identificador: this.propiedad._identificador,
        tipo: this.propiedad._tipo,
        numero: this.propiedad._numero,
        calles: this.propiedad._calles,
        codpost: this.propiedad._codpost,
        metrosc: this.propiedad._metrosc,
        preciom: this.propiedad._preciom,
        propietario: this.propiedad._propietario,
        edificable: this.propiedad._edificable,
        agua: this.propiedad._agua,
        luz: this.propiedad._luz,
        lejania: this.propiedad._lejania,
      };
    }
  }

  goBack(): void {
    this.location.back();
  }

  save_sol(edificable: any, luz: any, agua: any): void {
    (edificable = Boolean(edificable)),
      (luz = Boolean(luz)),
      (agua = Boolean(agua));
    const Prop: any = {
      edificable: edificable,
      luz: luz,
      agua: agua,
    };
    this.propiedadService
      .updatePropiedad(Prop)
      .subscribe((propiedad: any) => (this.propiedad = propiedad));
  }

  save_viv(): void {
    this.propiedadService
      .updatePropiedad(this.propiedad)
      .subscribe(() => this.goBack());
  }
}
