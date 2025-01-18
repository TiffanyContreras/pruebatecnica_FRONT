import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { localS } from '../services/localStorage';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  //getListadoClientes
  constructor(private router: Router,
    private apiService: ApiService,
    private localStorage: localS

  ) {}

  ngOnInit(): void {
  }


  onLoginSubmit(event: Event): void {
    event.preventDefault(); // Evita la recarga de la página por defecto del formulario

    // Obtén los valores del formulario
    const form = event.target as HTMLFormElement;
    const username = (form.querySelector('#username') as HTMLInputElement).value;
    const password = (form.querySelector('#password') as HTMLInputElement).value;

    console.log('Usuario:', username);
    console.log('Contraseña:', password);
    let bodyParams = {
      usuario: username,
      contrasena: password
    };
    this.apiService.postLogin(bodyParams).subscribe(
      (response) => {
        console.log('Token: ', response);
        this.router.navigate(['menu']);
      },
      (error) => {
        console.error('Error al obtener usuarios:', );
        if(error['error']['text']){

          console.log('Token: ', error['error']['text']);
          this.localStorage.guardarDato(error['error']['text']);
          this.localStorage.guardarUsuario(username);
          this.router.navigate(['menu']);
      }else{
        console.log('USUARIO O CONTRASEÑA INCORRECTA')
      }
        }

    );

    // Simula la validación
    /* if (username === 'usuario' && password === 'password') {
      console.log('Inicio de sesión exitoso');
      //this.router.navigate(['solicitudPrestamo']);
      this.router.navigate(['menu']);
    } else {
      alert('Usuario o contraseña incorrectos');
    } */
  }



}
