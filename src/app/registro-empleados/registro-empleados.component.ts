import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-registro-empleados',
  templateUrl: './registro-empleados.component.html',
  styleUrls: ['./registro-empleados.component.css']
})
export class RegistroEmpleadosComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }
  onEmployeeSubmit(event: Event): void {
    event.preventDefault(); // Evita el comportamiento por defecto del formulario

    const form = event.target as HTMLFormElement;

    // Obtén los valores de los campos

    const passwordInput = form.querySelector('#password') as HTMLInputElement;
    const nombreInput = form.querySelector('#nombre') as HTMLInputElement;
    const usernameInput = form.querySelector('#username') as HTMLInputElement;
    const apellidoInput = form.querySelector('#apellido') as HTMLInputElement;

    // Obtener el valor (si lo necesitas para algo más)
    const password: string = passwordInput.value;
    const nombre: string = nombreInput.value;
    const username: string = usernameInput.value;
    const apellido: string = apellidoInput.value;

    // Limpiar el campo


    // Muestra los datos capturados en consola
      if(nombre.length > 0 && apellido.length > 0 && username.length > 0 && password.length > 0){
        const body={
          "username": username,
          "password": password,
          "nombre": nombre,
          "apellido": apellido
        }
      this.apiService.postRegistrarEmpleado(body ).subscribe(

        (response) => {
          console.log('Listado ', response);

        },
        (error) => {
          if(error['error']['text']=='Usuario empleado creado correctamente'){
            alert('Empleado registrado exitosamente');
            passwordInput.value = '';
            nombreInput.value = '';
            usernameInput.value = '';
            apellidoInput.value = '';
          }
          console.log('Listado ', error);
          }
        );
    }

    // Aquí puedes agregar lógica para enviar los datos al backend

  }
}
