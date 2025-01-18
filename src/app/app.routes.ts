
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EstadoPrestamosComponent } from './estado-prestamos/estado-prestamos.component';
import { EditarEliminarClientesComponent } from './editar-eliminar-clientes/editar-eliminar-clientes.component';
import { PagosAprobadosComponent } from './pagos-aprobados/pagos-aprobados.component';
import { RegistroClienteComponent } from './registro-clientes/registro-clientes.component';
import { RealizarRecibirPagosComponent } from './realizar-recibir-pagos/realizar-recibir-pagos.component';
import { SolicitudPrestamoComponent } from './solicitud-prestamo/solicitud-prestamo.component';
import { RegistroEmpleadosComponent } from './registro-empleados/registro-empleados.component';
import { MenuComponent } from './menu/menu.component';

import { InformacionPrestamosAprobadosComponent } from './informacion-prestamos-aprobados/informacion-prestamos-aprobados.component';



export const appRoutes: Routes = [

	{
		path: 'login',
		component: LoginComponent,
	},

	{
		path: 'editarEliminarClientes',
		component: EditarEliminarClientesComponent,

	},{
		path: 'estadoPrestamos',
		component: EstadoPrestamosComponent,

	},{
		component: PagosAprobadosComponent,
		path: 'pagosAprobados',

	},
  {
		path: 'realizarRecibirPagos',

		component: RealizarRecibirPagosComponent,
	},
  {
		path: 'registroClientes',
		component: RegistroClienteComponent,

	},
  {
		path: 'registroEmpleados',
		component: RegistroEmpleadosComponent,
	},
  {
		path: 'solicitudPrestamo',
		component: SolicitudPrestamoComponent,

	},{
		path: 'menu',
		component: MenuComponent,
	},
  {
		path: 'informacionPrestamosAprobados',
		component: InformacionPrestamosAprobadosComponent,

	},


  ];

export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(appRoutes);
export const appRutingProviders: any[] = [];

