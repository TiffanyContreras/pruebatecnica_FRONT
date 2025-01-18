import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  token: any
  constructor(private router: Router,) { }

  ngOnInit(): void {
   this.token = localStorage.getItem('JwtToken');
   console.log(this.token);
  }

  navigateTo(page: string): void {
    console.log(`Navegando a la página: ${page}`);
    if(page=='listaClientes'){

    this.router.navigate(['/editarEliminarClientes']);

    }else if(page=='solicitudPrestamo'){

    this.router.navigate(['/solicitudPrestamo']);


    }else if(page=='estadoPrestamos'){
      this.router.navigate(['/estadoPrestamos'])

    }else if(page=='informacionPrestamosAprobados'){
      this.router.navigate(['/informacionPrestamosAprobados'])

    // Aquí puedes agregar lógica de navegación, como redirigir a rutas específicas
    }else if(page=='pagosAprobados'){
    this.router.navigate(['/pagosAprobados'])

    }else if(page=='registroClientes'){
      this.router.navigate(['/registroClientes'])

      }else if(page=='registroEmpleados'){
        this.router.navigate(['/registroEmpleados'])

        }
  }
}
