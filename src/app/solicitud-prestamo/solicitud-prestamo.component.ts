import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-solicitud-prestamo',
  templateUrl: './solicitud-prestamo.component.html',
  styleUrls: ['./solicitud-prestamo.component.css']
})
export class SolicitudPrestamoComponent implements OnInit {
  loanForm: FormGroup;

  constructor(private fb: FormBuilder) { this.loanForm = this.fb.group({
    idCliente: [null, [Validators.required]],
    montoSolicitado: [null, [Validators.required, Validators.min(1)]],
    plazoSolicitado: [null, [Validators.required, Validators.min(1)]]
  });}

  ngOnInit(): void {

  }

  onSubmit(): void {
    if (this.loanForm.valid) {
      const confirmacion = confirm('¿Está seguro de enviar la solicitud de préstamo?');
      if (confirmacion) {
        alert('¡Solicitud enviada exitosamente!');
        console.log(this.loanForm.value);
      }
    } else {
      alert('Por favor, complete todos los campos correctamente.');
    }
  }


}


