import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarEliminarClientesComponent } from './editar-eliminar-clientes.component';

describe('EditarEliminarClientesComponent', () => {
  let component: EditarEliminarClientesComponent;
  let fixture: ComponentFixture<EditarEliminarClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarEliminarClientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarEliminarClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
