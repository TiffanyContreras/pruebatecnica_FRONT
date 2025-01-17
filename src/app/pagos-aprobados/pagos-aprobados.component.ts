import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pagos-aprobados',
  templateUrl: './pagos-aprobados.component.html',
  styleUrls: ['./pagos-aprobados.component.css']
})
export class PagosAprobadosComponent implements OnInit {

  paymentForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
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

      this.http.post('https://api.example.com/realizar-pago', datosPago).subscribe(
        (response) => {
          alert('¡Pago realizado exitosamente!');
          this.paymentForm.reset();
        },
        (error) => {
          console.error('Error al realizar el pago:', error);
          alert('Hubo un error al realizar el pago. Intente nuevamente.');
        }
      );
    } else {
      alert('Por favor, complete todos los campos correctamente.');
    }
  }

}
