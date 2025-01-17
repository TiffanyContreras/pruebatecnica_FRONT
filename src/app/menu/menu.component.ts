import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private router: Router,) { }

  ngOnInit(): void {
  }

  navigateTo(page: string): void {
    console.log(`Navegando a la página: ${page}`);
    if(page=='listaClientes'){

    this.router.navigate(['/editarEliminarClientes']);
    }else if(page=='solicitudPrestamo'){

    this.router.navigate(['/solicitudPrestamo']);
    }
    // Aquí puedes agregar lógica de navegación, como redirigir a rutas específicas
  }

}
