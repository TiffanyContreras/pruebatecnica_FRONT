import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

export interface Prestamo {
  saldoPendiente: number;      // Saldo pendiente del préstamo
  idCliente: number;           // ID del cliente
  numeroTelefono: number;      // Número de teléfono del cliente
  nombreCliente: string;       // Nombre del cliente
  idPrestamo: number;          // ID del préstamo
  montoAprobado: number;       // Monto aprobado para el préstamo
  cantidadPagos: number;       // Cantidad de pagos realizados o pendientes
}


@Component({
  selector: 'app-informacion-prestamos-aprobados',
  templateUrl: './informacion-prestamos-aprobados.component.html',
  styleUrls: ['./informacion-prestamos-aprobados.component.css']
})
export class InformacionPrestamosAprobadosComponent implements OnInit {
  prestamosAprobados: Prestamo[] =[];

  constructor( private apiService: ApiService,) {}

  ngOnInit(): void {
    this.apiService.getListadoAprobados( ).subscribe(

      (response) => {
        this.prestamosAprobados = response;
        console.log('Listado ', this.prestamosAprobados);

      },
      (error) => {
        }
      );

  }

 /*  cargarPrestamosAprobados(): void {
    this.http.get<any[]>('https://api.example.com/prestamos-aprobados').subscribe(
      (data) => {
        this.prestamosAprobados = data;
      },
      (error) => {
        console.error('Error al cargar los préstamos aprobados:', error);
        alert('No se pudo cargar el listado de préstamos aprobados.');
      }
    );
  } */

}
