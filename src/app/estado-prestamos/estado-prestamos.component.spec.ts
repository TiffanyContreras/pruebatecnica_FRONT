import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoPrestamosComponent } from './estado-prestamos.component';

describe('EstadoPrestamosComponent', () => {
  let component: EstadoPrestamosComponent;
  let fixture: ComponentFixture<EstadoPrestamosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstadoPrestamosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadoPrestamosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
