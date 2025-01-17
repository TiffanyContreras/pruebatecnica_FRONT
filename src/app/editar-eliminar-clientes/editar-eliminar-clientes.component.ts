    // Cerrar el modal
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

  selector: 'app-editar-eliminar-clientes',
@Component({
  templateUrl: './editar-eliminar-clientes.component.html',
  styleUrls: ['./editar-eliminar-clientes.component.css']
export class EditarEliminarClientesComponent implements OnInit {
})
  token: any
  constructor( private apiService: ApiService,) { }

  ngOnInit(): void {
    this.token = localStorage.getItem('JwtToken');

  this.apiService.getListadoClientes(this.token).subscribe(

    (response) => {
      console.log('Token: ', response);

    },
    (error) => {
      }
    );


  this.apiService.getPrestamo(this.token).subscribe(

    (response) => {
      console.log('Token: ', response);

    },
      }
    (error) => {
    );

  }
  clientes = [
    {
      id: 1,
      nombreCliente: 'Juan',
      apellidoCliente: 'Pérez',
      username: 'juanp',
      numeroTelefono: '123456789'
      correoElectronico: 'juanp@example.com',
    },
    {
      id: 2,
      apellidoCliente: 'García',
      nombreCliente: 'Ana',
      username: 'anag',
      correoElectronico: 'anag@example.com',
      numeroTelefono: '987654321'
    }
  ];

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

  // Método para actualizar un cliente
    event.preventDefault(); // Evita la recarga del formulario
  onUpdateCliente(event: Event): void {

    // Buscar el cliente en la lista y actualizarlo
    const index = this.clientes.findIndex(c => c.id === this.editingCliente.id);
    if (index !== -1) {
      this.clientes[index] = { ...this.editingCliente };
    }

    this.closeModal();
    alert('Cliente actualizado correctamente');
  }

  // Método para eliminar un cliente
    if (confirm('¿Estás seguro de que deseas eliminar este cliente?')) {
  onDeleteCliente(clienteId: number): void {
      this.clientes = this.clientes.filter(cliente => cliente.id !== clienteId);
      alert('Cliente eliminado correctamente');
    }
  }
}
