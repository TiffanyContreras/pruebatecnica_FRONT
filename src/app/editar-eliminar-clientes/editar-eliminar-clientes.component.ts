    // Cerrar el modal
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';


interface Cliente {
    idCliente: number;
    numeroTelefono: string;
    numeroIdentificacion: string;
    correoElectronico: string;
    direccionCliente: string;
    fechaNacimiento: string; // Puedes usar Date si lo necesitas como objeto Date
    informacionCliente: string;
    departamento: string;
    municipio: string;
    username: string;
    password: string;
    nombre: string;
    apellido: string;
}

interface ClienteApi {
  numeroTelefono: string;
  numeroIdentificacion: string;
  correoElectronico: string;
  direccionCliente: string;
  fechaNacimiento: string;
  departamento: string;
  municipio: string;
  username: string;
  password: string;
  nombreCliente: string;
  apellidoCliente: string;
}

@Component({
  templateUrl: './editar-eliminar-clientes.component.html',
  styleUrls: ['./editar-eliminar-clientes.component.css']
})


export class EditarEliminarClientesComponent implements OnInit {

  token: any

  clientes: Cliente[]=[];




  constructor( private apiService: ApiService,) { }

  ngOnInit(): void {


  this.apiService.getListadoClientes().subscribe(

    (response) => {
      this.clientes=response;
    },
    (error) => {
    }
    );

  }


  // Control para el modal de edición
  isEditing = false;
  editingCliente: any = null;

  // Método para iniciar la edición de un cliente
  onEditCliente(cliente: any): void {
    this.isEditing = true;
    this.editingCliente = { ...cliente }; // Crear una copia del cliente para editar
  }

  onInputChange(event: Event, key: string): void {
  // Método para manejar cambios en los campos de entrada
    const input = event.target as HTMLInputElement;
    if (input) {
      this.editingCliente[key] = input.value;
    }
  }

  // Método para cerrar el modal
  closeModal(): void {
    this.editingCliente = null;
    this.isEditing = false;
  }

  onUpdateCliente(event: any){
  // Método para actualizar un cliente
    event.preventDefault(); // Evita la recarga del formulario
    console.log("los datos son:", this.editingCliente);
    const clienteApi: ClienteApi = {
      numeroTelefono: this.editingCliente.numeroTelefono,
      numeroIdentificacion: this.editingCliente.numeroIdentificacion,
      correoElectronico: this.editingCliente.correoElectronico,
      direccionCliente: this.editingCliente.direccionCliente,
      fechaNacimiento: this.editingCliente.fechaNacimiento.replace(' ', 'T'),
      departamento: "null",
      municipio: "null",
      username:  "null",
      password:  "null",
      nombreCliente: this.editingCliente.nombre, // Asignamos el valor de nombreCliente a nombres
      apellidoCliente: this.editingCliente.apellido
  };
  console.log("los datos son:",clienteApi);

    this.apiService.putActualizarCliente(clienteApi, this.editingCliente.idCliente).subscribe(
      (response) => {
        console.log('Response: ', response);
      },
      (error) => {
        console.log('Response: ', error);
        if(error['error']['text'] == "Cliente actualizado correctamente"){
        this.apiService.getListadoClientes().subscribe(
          (response) => {
            this.clientes=response;
          },
          (error) => {
          }
          );
          this.closeModal();
          alert('Cliente actualizado correctamente');
        }

      }
    );

    // Buscar el cliente en la lista y actualizarlo
    /* const index = this.clientes.findIndex(c => c.idCliente === this.editingCliente.id);
    if (index !== -1) {
      this.clientes[index] = { ...this.editingCliente };
    }
 */
    // Cerrar el modal

  }
  onDeleteCliente(clienteId: any){
  // Método para eliminar un cliente
    if (confirm('¿Estás seguro de que deseas eliminar este cliente?')) {
      this.apiService.deletePrestamo(clienteId).subscribe(
        (response) => {
          console.log('Response: ', response);
        },
        (error) => {
          console.log('Error: ', error);
          if(error['error']['text']=="Cliente eliminado correctamente"){
            this.clientes = this.clientes.filter(cliente => cliente.idCliente !== clienteId);
            alert('Cliente eliminado correctamente');
          }
        }
      );
    }
  }
}
