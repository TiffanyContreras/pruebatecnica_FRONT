import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'registro-clientes',
  templateUrl: './registro-clientes.component.html',
  styleUrls: ['./registro-clientes.component.css']
})
export class RegistroClienteComponent {
  constructor(private router: Router,private apiService: ApiService) {}

  onClientSubmit(event: Event): void {
    event.preventDefault(); // Evita que la página se recargue por defecto

    // Obtén los valores del formulario usando `event.target`
    const form = event.target as HTMLFormElement;
    const nombreClienteInput = form.querySelector('#nombreCliente') as HTMLInputElement;
    const apellidoClienteInput = form.querySelector('#apellidoCliente') as HTMLInputElement;
    const usernameInput = form.querySelector('#username') as HTMLInputElement;
    const passwordInput = form.querySelector('#password') as HTMLInputElement;
    const numeroIdentificacionInput = form.querySelector('#numeroIdentificacion') as HTMLInputElement;
    const fechaNacimientoInput = form.querySelector('#fechaNacimiento') as HTMLInputElement;
    const correoElectronicoInput = form.querySelector('#correoElectronico') as HTMLInputElement;
    const numeroTelefonoInput = form.querySelector('#numeroTelefono') as HTMLInputElement;
    const municipioInput = form.querySelector('#municipio') as HTMLInputElement;
    const departamentoInput = form.querySelector('#departamento') as HTMLInputElement;
    const direccionClienteInput = form.querySelector('#direccionCliente') as HTMLInputElement;


    const nombreCliente: string = nombreClienteInput.value;
    const apellidoCliente: string = apellidoClienteInput.value;
    const username: string = usernameInput.value;
    const password: string = passwordInput.value;
    const numeroIdentificacion: string = numeroIdentificacionInput.value;
    const fechaNacimiento: string = fechaNacimientoInput.value;
    const correoElectronico: string = correoElectronicoInput.value;
    const numeroTelefono: string = numeroTelefonoInput.value;
    const departamento: string = departamentoInput.value;
    const municipio: string = municipioInput.value;
    const direccionCliente: string = direccionClienteInput.value;

    if(nombreCliente.length > 0 && apellidoCliente.length > 0 && username.length > 0 && password.length > 0){
      const body ={
        "username": username,
        "password": password,
        "numeroIdentificacion": numeroIdentificacion,
        "nombreCliente": nombreCliente,
        "apellidoCliente": apellidoCliente,
        "fechaNacimiento": fechaNacimiento+"T00:00:00.000Z",
        "correoElectronico": correoElectronico,
        "numeroTelefono": numeroTelefono,
        "departamento": 0,
        "municipio": 0,
        "direccionCliente": direccionCliente
      }
    this.apiService.postCrearCliente(body ).subscribe(

      (response) => {
        console.log('Listado ', response);

      },
      (error) => {
        if(error['error']['text']=="Cliente creado correctamente"){
          alert('Empleado registrado exitosamente');
          usernameInput.value = '';
          passwordInput.value = '';
          numeroIdentificacionInput.value = '';
          nombreClienteInput.value = '';
          apellidoClienteInput.value = '';
          fechaNacimientoInput.value = '';
          correoElectronicoInput.value = '';
          numeroTelefonoInput.value = '';
          departamentoInput.value = '';
          municipioInput.value = '';
          direccionClienteInput.value = '';
        }else{
        console.log('Listado ', error);
        }
        }
      );

      console.log(body);

    alert('Formulario enviado correctamente');
  }
}
}

