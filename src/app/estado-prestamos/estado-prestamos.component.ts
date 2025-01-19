import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';

export interface SolicitudPrestamo {
  numeroTelefono: number;
  plazo: number;
  montoSolicitado: number;
  fechaCreacion: string; // O Date, dependiendo de cómo manejes las fechas
  estado: string;
  informacionCliente: string;
  clienteId: number;
  idPrestamo: number;
}

@Component({
  selector: 'app-estado-prestamos',
  templateUrl: './estado-prestamos.component.html',
  styleUrls: ['./estado-prestamos.component.css']
})
export class EstadoPrestamosComponent implements OnInit {
  user = localStorage.getItem('User');
  searchForm: FormGroup;

  prestamos: SolicitudPrestamo []=[];
  // Simular datos de préstamos    prestamosSimulados  prestamo[]=[];
  mostrarVentanaEmergente: boolean = false; // Controla si la ventana está abierta
  datosFormAprueba: FormGroup;
  datosFormRechaza: FormGroup; // Formulario reactivo para capturar los datos
  datos: any[] = [];
  constructor(
    private apiService: ApiService,
    private fb: FormBuilder,
  ) {
    this.searchForm = this.fb.group({
      idCliente: [null, [Validators.required, Validators.min(1)]]
    });
    this.datosFormAprueba = this.fb.group({
      idPrestamo: [''],
      usuarioAprueba: ['',Validators.required],
      comentario: ['',Validators.required]
    });
    this.datosFormRechaza = this.fb.group({
      idPrestamo: [''],
      usuarioRechaza: ['',Validators.required],
      comentario: ['',Validators.required]
    });
  }
  mostrarTabla: boolean = false;
  opcion: any;
  ngOnInit(): void {


  }
  idCliente:any;
  buscarPrestamo(): void {
    this.idCliente = this.searchForm.get('idCliente')?.value;
    this.cargarTabla();
/*
    const resultado = this.prestamosSimulados.find(p => p.idCliente === idCliente);
    if (resultado) {
      this.prestamo = resultado;
    } else {
      alert('No se encontró un préstamo con el ID proporcionado.');
      this.prestamo = null;
    } */
  }

  cargarTabla(){
    this.apiService.getPrestamo( ).subscribe(

      (response) => {
        this.prestamos=response;
        console.log('Token: ',this.prestamos);
        this.mostrarTabla=true;

      },
      (error) => {
        }
      );
  }

  Prestamo(idPrestamo: any, opcion:any): void {

    this.opcion=opcion;
    /* if (this.prestamo) {
      alert(`¡Préstamo aprobado para el cliente con ID ${this.prestamo.idCliente}!`);
      this.prestamo = null;
      this.searchForm.reset();
    } */
   /* this.datosForm.get('usuarioAprueba')?.setValue(this.user); */
   if(opcion==1){
    this.datosFormAprueba.get('idPrestamo')?.setValue(idPrestamo);
   }else if(opcion ==2){
    this.datosFormRechaza.get('idPrestamo')?.setValue(idPrestamo);
   }
      this.mostrarVentanaEmergente = true;

  }

  rechazarPrestamo(): void {
    /* if (this.prestamo) {
      alert(`El préstamo para el cliente con ID ${this.prestamo.idCliente} ha sido rechazado.`);
      this.prestamo = null;
      this.searchForm.reset();
    } */
  }


  cerrarVentanaEmergente() {
    this.mostrarVentanaEmergente = false; // Cierra la ventana
  }

  guardarDatos(opcion: any) {


    if(opcion==1){//Aprobar
      const datosCapturados = this.datosFormAprueba.value;
      this.apiService.postPago(datosCapturados).subscribe(

        (response) => {
          console.log("RESPONSE: ",response);
        },
        (error) => {

          if(error['error']['text']=='Se ha aprobado el prestamo con exito'){
            this.datosFormAprueba.reset();
            this.cargarTabla();
            alert('Aprobado exitosamente');
          }else{
            alert('A ocurrido un error');
          }
          console.log("ERROR: ",error)
        }
        );
    }else if(opcion==2){//Rechazar
      const datosCapturados = this.datosFormRechaza.value;
      this.apiService.postRechazarPrestamo(datosCapturados).subscribe(

        (response) => {
          console.log("RESPONSE: ",response);
        },
        (error) => {

          if(error['error']['text']=='Se ha rechazado el prestamo con exito"'){
            this.cargarTabla();
            alert('Rechazado exitosamente');
            this.datosFormRechaza.reset();
          }else{
            alert('Se ha rechazado el prestamo con exito');
          }
          console.log("ERROR: ",error)
        }
        );
    }


    this.cerrarVentanaEmergente(); // Cierra la ventana
  }


}
