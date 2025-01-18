import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';

interface Cliente {
  clienteId:number;
  estado:string;
  fechaCreacion:string;
  informacionCliente:string;
  montoSolicitado:number;
  numeroTelefono:number;
  plazo:number;
}

@Component({
  selector: 'app-estado-prestamos',
  templateUrl: './estado-prestamos.component.html',
  styleUrls: ['./estado-prestamos.component.css']
})
export class EstadoPrestamosComponent implements OnInit {
  searchForm: FormGroup;
  prestamo: { idCliente: number; montoSolicitado: number; plazoSolicitado: number } | null = null;

  // Simular datos de préstamos
  prestamosSimulados = [
    { idCliente: 1, montoSolicitado: 5000, plazoSolicitado: 12 },
    { idCliente: 2, montoSolicitado: 10000, plazoSolicitado: 24 },
    { idCliente: 3, montoSolicitado: 15000, plazoSolicitado: 36 }
  ];

  constructor(
    private apiService: ApiService,
    private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      idCliente: [null, [Validators.required, Validators.min(1)]]
    });
  }

  ngOnInit(): void {

  this.apiService.getPrestamo(9).subscribe(

    (response) => {
      console.log('Token: ', response);

    },
    (error) => {
      }
    );
  }

  buscarPrestamo(): void {
    const idCliente = this.searchForm.get('idCliente')?.value;

    const resultado = this.prestamosSimulados.find(p => p.idCliente === idCliente);
    if (resultado) {
      this.prestamo = resultado;
    } else {
      alert('No se encontró un préstamo con el ID proporcionado.');
      this.prestamo = null;
    }
  }

  aprobarPrestamo(): void {
    if (this.prestamo) {
      alert(`¡Préstamo aprobado para el cliente con ID ${this.prestamo.idCliente}!`);
      this.prestamo = null;
      this.searchForm.reset();
    }
  }

  rechazarPrestamo(): void {
    if (this.prestamo) {
      alert(`El préstamo para el cliente con ID ${this.prestamo.idCliente} ha sido rechazado.`);
      this.prestamo = null;
      this.searchForm.reset();
    }
  }


}
