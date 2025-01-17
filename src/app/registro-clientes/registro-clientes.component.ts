import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'registro-clientes',
  templateUrl: './registro-clientes.component.html',
  styleUrls: ['./registro-clientes.component.css']
})
export class RegistroClienteComponent {
  constructor(private router: Router) {}

  onClientSubmit(event: Event): void {
    event.preventDefault(); // Evita que la página se recargue por defecto

    // Obtén los valores del formulario usando `event.target`
    const form = event.target as HTMLFormElement;
    const nombreCliente = (form.querySelector('#nombreCliente') as HTMLInputElement).value;
    const apellidoCliente = (form.querySelector('#apellidoCliente') as HTMLInputElement).value;
    const username = (form.querySelector('#username') as HTMLInputElement).value;
    const password = (form.querySelector('#password') as HTMLInputElement).value;
    const numeroIdentificacion = (form.querySelector('#numeroIdentificacion') as HTMLInputElement).value;

    console.log('Datos del cliente:', {
      nombreCliente,
      apellidoCliente,
      username,
      password,
      numeroIdentificacion
    });

    alert('Formulario enviado correctamente');
  }
}

