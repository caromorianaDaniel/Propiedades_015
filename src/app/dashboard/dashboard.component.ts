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
      text: 'Si',
    },
    xAxis: {
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
    },
    yAxis: {
      title: {
        text: 'Temperature °C',
      },
    },
    tooltip: {
      valueSuffix: ' °C',
    },
    series: [
      {
        type: 'line',
        name: 'Tokyo',
        data: [
          7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6,
        ],
      },
      {
        type: 'line',
        name: 'New York',
        data: [
          -0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5,
        ],
      },
      {
        type: 'line',
        name: 'Berlin',
        data: [
          -0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0,
        ],
      },
      {
        type: 'line',
        name: 'London',
        data: [
          3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8,
        ],
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
