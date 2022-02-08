import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PropdDetailComponent } from './propd-detail/propd-detail.component';
import { PropiedadesComponent } from './propiedades/propiedades.component';
import { ProptDetailComponent } from './propt-detail/propt-detail.component';
import { PropietariosComponent } from './propietarios/propietarios.component';
import { ProptSearchComponent } from './propt-search/propt-search.component';
import { TransDetailComponent } from './trans-detail/trans-detail.component';
import { TransaccionesComponent } from './transacciones/transacciones.component';
import { TransSearchComponent } from './trans-search/trans-search.component';
import { CrearPropiedadesComponent } from './crear-propiedades/crear-propiedades.component';
import { CrearProptComponent } from './crear-propt/crear-propt.component';
import { CrearTransComponent } from './crear-trans/crear-trans.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    PropiedadesComponent,
    PropdDetailComponent,
    ProptDetailComponent,
    PropietariosComponent,
    ProptSearchComponent,
    TransDetailComponent,
    TransaccionesComponent,
    TransSearchComponent,
    CrearPropiedadesComponent,
    CrearProptComponent,
    CrearTransComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
