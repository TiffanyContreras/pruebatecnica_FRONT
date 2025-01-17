import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'prueba-tecnica';
 constructor(private router: Router) {}


 ngOnInit() {
  const token = localStorage.getItem('JwtToken');
    if (token) {
      // Si hay un token, redirigir a otro componente (por ejemplo, el dashboard)
      this.router.navigate(['menu']);
    } else {
      // Si no hay un token, redirigir al login
      this.router.navigate(['login']);
    }
  }
}


