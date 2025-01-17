import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  //getListadoClientes
  constructor(private router: Router,
    private apiService: ApiService
  ) {}
  ngOnInit(): void {

    this.apiService.getListadoClientes().subscribe(
      (response) => {
        console.log('Usuarios obtenidos:', response);
      },
      (error) => {
        console.error('Error al obtener usuarios:', error);
      }
    );


  }


  onLoginSubmit(event: Event): void {
    event.preventDefault(); // Evita la recarga de la página por defecto del formulario

    // Obtén los valores del formulario
    const form = event.target as HTMLFormElement;
    const username = (form.querySelector('#username') as HTMLInputElement).value;
    const password = (form.querySelector('#password') as HTMLInputElement).value;

    console.log('Usuario:', username);
    console.log('Contraseña:', password);

    // Simula la validación
    if (username === 'usuario' && password === 'password') {
      console.log('Inicio de sesión exitoso');
      //this.router.navigate(['solicitudPrestamo']);
      this.router.navigate(['menu']);
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  }

  navigateToRegisterCliente(): void {
    this.router.navigate(['/registroClientes']);
  }

  navigateToRegisterEmpleado(): void {
    this.router.navigate(['/registroEmpleados']);
  }

}
