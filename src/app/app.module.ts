import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SolicitudPrestamoComponent } from './solicitud-prestamo/solicitud-prestamo.component';
import { RegistroClienteComponent } from './registro-clientes/registro-clientes.component';
import { EstadoPrestamosComponent } from './estado-prestamos/estado-prestamos.component';
import { RegistroEmpleadosComponent } from './registro-empleados/registro-empleados.component';
import { EditarEliminarClientesComponent } from './editar-eliminar-clientes/editar-eliminar-clientes.component';
import { RealizarRecibirPagosComponent } from './realizar-recibir-pagos/realizar-recibir-pagos.component';
import { PagosAprobadosComponent } from './pagos-aprobados/pagos-aprobados.component';
import { appRutingProviders, routing} from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InformacionPrestamosAprobadosComponent } from './informacion-prestamos-aprobados/informacion-prestamos-aprobados.component';
import { localS } from './services/localStorage';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SolicitudPrestamoComponent,
    RegistroClienteComponent,
    EstadoPrestamosComponent,
    RegistroEmpleadosComponent,
    EditarEliminarClientesComponent,
    RealizarRecibirPagosComponent,
    PagosAprobadosComponent,
    MenuComponent,
    InformacionPrestamosAprobadosComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [appRutingProviders,localS],
  bootstrap: [AppComponent]
})
export class AppModule { }
