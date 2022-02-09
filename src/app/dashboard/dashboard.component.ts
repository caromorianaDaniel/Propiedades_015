import { Component, OnInit } from '@angular/core';
import { Propiedad } from '../propiedades';
import { PropiedadService } from '../propiedad.service';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  propiedades: Propiedad[] = [];
  Highcharts: typeof Highcharts = Highcharts;
  //Highcharts.chart('container',
  chartOptions: Highcharts.Options = {
    chart: {
      type: 'line',
      backgroundColor: '#FFFFF',
    },
    title: {
      text: 'Acumulación de Tarjetas',
    },
    xAxis: {
      categories: [],
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Metros Cuadrados',
      },
    },
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle',
    },
    series: [
      {
        type: 'line',
        name: 'Serie 1',
        data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      },
    ],
  };

  constructor(private propiedadService: PropiedadService) {}

  ngOnInit() {
    this.getPropiedades();
  }

  getPropiedades(): void {
    this.propiedadService
      .getPropiedades()
      .subscribe((propiedades) => (this.propiedades = propiedades));
    this.chartOptions.xAxis['categories'] = this.propiedades.map(
      (x: Propiedad) => x._identificador
    );
    //const dataSeries1 = this.propiedades.map((x: Propiedad) => x._codpost);
    //const dataSeries = this.propiedades.map((x: Propiedad) => x._metrosc);
    //this.chartOptions.series[0]['data'] = dataSeries;
    //this.chartOptions.series[0]['data'] = dataSeries1;
    Highcharts.chart('miGrafico01', this.chartOptions);
  }
}
