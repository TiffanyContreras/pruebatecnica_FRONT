import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-pagos-aprobados',
  templateUrl: './pagos-aprobados.component.html',
  styleUrls: ['./pagos-aprobados.component.css']
})
export class PagosAprobadosComponent implements OnInit {

  paymentForm: FormGroup;

  constructor(private fb: FormBuilder,private apiService: ApiService,) {
    this.paymentForm = this.fb.group({
      idPrestamo: [null, [Validators.required, Validators.min(1)]],
      abonoPrestamo: [null, [Validators.required, Validators.min(1)]],
      usuarioModifica: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  ngOnInit(): void {}

  realizarPago(): void {
    if (this.paymentForm.valid) {
      const datosPago = this.paymentForm.value;

      this.apiService.postAprobarPrestamo(datosPago ).subscribe(

        (response) => {
          console.log('Listado ', response);

        },
        (error) => {
          if(error['error']['text']=='Pago realizado correctamente'){
            this.paymentForm.reset();
          alert('Pago realizado EXITOSAMENTE');
          }
          console.log('Listado ', error);
          }
        );

    } else {
      alert('Por favor, complete todos los campos correctamente.');
    }
  }

}
