import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro-empleados',
  templateUrl: './registro-empleados.component.html',
  styleUrls: ['./registro-empleados.component.css']
})
export class RegistroEmpleadosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onEmployeeSubmit(event: Event): void {
    event.preventDefault(); // Evita el comportamiento por defecto del formulario

    const form = event.target as HTMLFormElement;

    // Obtén los valores de los campos
    const nombre = (form.querySelector('#nombre') as HTMLInputElement).value;
    const apellido = (form.querySelector('#apellido') as HTMLInputElement).value;
    const username = (form.querySelector('#username') as HTMLInputElement).value;
    const password = (form.querySelector('#password') as HTMLInputElement).value;

    // Muestra los datos capturados en consola
    console.log('Datos del empleado:', { nombre, apellido, username, password });

    // Aquí puedes agregar lógica para enviar los datos al backend
    alert('Empleado registrado exitosamente');
  }
}
