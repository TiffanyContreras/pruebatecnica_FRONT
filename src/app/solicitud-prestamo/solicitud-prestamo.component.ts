import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-solicitud-prestamo',
  templateUrl: './solicitud-prestamo.component.html',
  styleUrls: ['./solicitud-prestamo.component.css']
})
export class SolicitudPrestamoComponent implements OnInit {
  loanForm: FormGroup;

  constructor(
    private apiService: ApiService,
    private fb: FormBuilder) { this.loanForm = this.fb.group({
    idCliente: [null, [Validators.required]],
    montoSolicitado: [null, [Validators.required, Validators.min(1)]],
    plazoSolicitado: [null, [Validators.required, Validators.min(1)]]
  });}

  ngOnInit(): void {

  }
//postGenerarPrestamo
  onSubmit(): void {
    if (this.loanForm.valid) {
      const confirmacion = confirm('¿Está seguro de enviar la solicitud de préstamo?');
      if (confirmacion) {

        this.apiService.postGenerarPrestamo(this.loanForm.value).subscribe(
          (response) => {
            alert('¡Solicitud enviada exitosamente!');
          },
          (error) => {
            console.log('Error: ', error);
          }
        );
      }
    } else {
      alert('Por favor, complete todos los campos correctamente.');
    }
  }


}


