import {Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class localS { // Guardar un dato en LocalStorage
 guardarDato(key: string) {

  localStorage.setItem('JwtToken', key);
  console.log('Dato guardado en LocalStorage');
}
guardarUsuario(key: string) {

  localStorage.setItem('User', key);
  console.log('Dato guardado en LocalStorage');
}

// Leer un dato desde LocalStorage
leerUsuario() {
  const valor = localStorage.getItem('User');
  console.log('Dato leído desde LocalStorage:', valor);
}
leerDato() {
  const valor = localStorage.getItem('JwtToken');
  console.log('Dato leído desde LocalStorage:', valor);
}

// Eliminar un dato específico
eliminarDato() {
  localStorage.removeItem('JwtToken');
  console.log('Dato eliminado del LocalStorage');
}

//Eliminar todo
deleteAll() {
  localStorage.clear(); // Limpia todo el almacenamiento local
  console.log('Dato eliminado del LocalStorage');
}
}
