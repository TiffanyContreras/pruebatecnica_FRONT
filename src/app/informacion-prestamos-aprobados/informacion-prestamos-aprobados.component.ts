import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-informacion-prestamos-aprobados',
  templateUrl: './informacion-prestamos-aprobados.component.html',
  styleUrls: ['./informacion-prestamos-aprobados.component.css']
})
export class InformacionPrestamosAprobadosComponent implements OnInit {
  prestamosAprobados = [
    {
      numeroTelefono: 555123456,
      nombreCliente: 'Juan Pérez',
      idPrestamo: 101,
      saldoPendiente: 2500,
      idCliente: 1,
      montoAprobado: 5000,
      cantidadPagos: 12
    },
    {
      numeroTelefono: 555654321,
      nombreCliente: 'Ana García',
      idPrestamo: 102,
      saldoPendiente: 1000,
      idCliente: 2,
      montoAprobado: 3000,
      cantidadPagos: 6
    }
  ];

  constructor(/* private http: HttpClient */) {}

  ngOnInit(): void {
    /* this.cargarPrestamosAprobados(); */
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
