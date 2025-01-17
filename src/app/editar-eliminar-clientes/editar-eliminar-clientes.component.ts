import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-editar-eliminar-clientes',
  templateUrl: './editar-eliminar-clientes.component.html',
  styleUrls: ['./editar-eliminar-clientes.component.css']
})
export class EditarEliminarClientesComponent implements OnInit {
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
    (error) => {
      }
    );

  }
  clientes = [
    {
      id: 1,
      nombreCliente: 'Juan',
      apellidoCliente: 'Pérez',
      username: 'juanp',
      correoElectronico: 'juanp@example.com',
      numeroTelefono: '123456789'
    },
    {
      id: 2,
      nombreCliente: 'Ana',
      apellidoCliente: 'García',
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

  // Método para manejar cambios en los campos de entrada
  onInputChange(event: Event, key: string): void {
    const input = event.target as HTMLInputElement;
    if (input) {
      this.editingCliente[key] = input.value;
    }
  }

  // Método para cerrar el modal
  closeModal(): void {
    this.isEditing = false;
    this.editingCliente = null;
  }

  // Método para actualizar un cliente
  onUpdateCliente(event: Event): void {
    event.preventDefault(); // Evita la recarga del formulario

    // Buscar el cliente en la lista y actualizarlo
    const index = this.clientes.findIndex(c => c.id === this.editingCliente.id);
    if (index !== -1) {
      this.clientes[index] = { ...this.editingCliente };
    }

    // Cerrar el modal
    this.closeModal();
    alert('Cliente actualizado correctamente');
  }

  // Método para eliminar un cliente
  onDeleteCliente(clienteId: number): void {
    if (confirm('¿Estás seguro de que deseas eliminar este cliente?')) {
      this.clientes = this.clientes.filter(cliente => cliente.id !== clienteId);
      alert('Cliente eliminado correctamente');
    }
  }
}
