import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  token = localStorage.getItem('JwtToken');

  BASEAPI = 'http://localhost:8080/';

  APICLIENTES = this.BASEAPI + 'clientes/v1';
  APIPRESTAMO = this.BASEAPI + 'prestamo/v1';

  constructor(private http: HttpClient) {}

  //obtiene listado de clientes registrados
  getListadoClientes(){
    return this.http.request<any>('GET', this.APICLIENTES+"/lista", {
    });
  }
  getListadoAprobados(){
    return this.http.request<any>('GET', this.BASEAPI+"aprobado/v1/obtener", {
    });
  }

  getPrestamo(){
    return this.http.request<any>('GET', this.APIPRESTAMO+`/lista/en-proceso`, {
    });
  }
  deletePrestamo(ID: any){
      return this.http.request<any>('DELETE', this.APICLIENTES+`/elimina/${ID}`, {
      });
    }
  putActualizarCliente(body: any,ID: any){
      return this.http.request<any>('PUT', this.APICLIENTES+`/actualizar/${ID}`, {
        body: body,
      });
    }

    postAprobarPrestamo(body: any){
      return this.http.request<any>('POST', this.BASEAPI+`pago/v1/pagar`, {
        body: body,
      });
    }
      postCrearCliente(body: any){
            return this.http.request<any>('POST', this.APICLIENTES+`/crear`, {
              body: body,
            });
     }

    postRegistrarEmpleado(body: any){
          return this.http.request<any>('POST', this.BASEAPI+`empleados/v1/crear`, {
            body: body,
          });
    }

    postPago(body: any){
      return this.http.request<any>('POST', this.APIPRESTAMO+`/aprobar`, {
        body: body,
      });
    }
    postRechazarPrestamo(body: any){
      return this.http.request<any>('POST', this.APIPRESTAMO+`/rechaza`, {
        body: body,
      });
    }
  postLogin(body: any){
    return this.http.request<any>('POST', this.BASEAPI+"auth/login", {
      body: body, // Aquí se envía el body
    });
  }
  postGenerarPrestamo(body: any){
    return this.http.request<any>('POST', this.APIPRESTAMO+"/generar", {
      body: body, // Aquí se envía el body
    });
  }


}
