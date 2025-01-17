import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'https://api.tuservidor.com'; // Cambia por la URL base de tu API
  BASEAPI = 'http://localhost:8080/';

  APICLIENTES = this.BASEAPI + 'clientes/v1';
  APIPRESTAMO = this.BASEAPI + '/prestamo/v1';

  constructor(private http: HttpClient) {}

  //obtiene listado de clientes registrados
  getListadoClientes(token:any){
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',


    });
    return this.http.request<any>('GET', this.APICLIENTES+"/lista", {
        headers: headers
    });
   // return this.http.get(`${this.APICLIENTES}/lista`);
  }
 getPrestamo(token:any){
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',


    });
    return this.http.request<any>('GET', this.APIPRESTAMO+`/prestamo/${3}`, {
        headers: headers
    });3
   // return this.http.get(`${this.APICLIENTES}/lista`);
  }

  postLogin(body: any){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.request<any>('POST', this.BASEAPI+"auth/login", {
      body: body, // Aquí se envía el body

    });
  }


  // Obtener una lista de datos (GET)
  getData(endpoint: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${endpoint}`);
  }

  // Enviar datos al servidor (POST)
  postData(endpoint: string, data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/${endpoint}`, data, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  // Actualizar datos en el servidor (PUT)
  updateData(endpoint: string, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${endpoint}`, data, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  // Eliminar un recurso (DELETE)
  deleteData(endpoint: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${endpoint}`);
  }
}
