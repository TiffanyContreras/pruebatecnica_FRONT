import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionPrestamosAprobadosComponent } from './informacion-prestamos-aprobados.component';

describe('InformacionPrestamosAprobadosComponent', () => {
  let component: InformacionPrestamosAprobadosComponent;
  let fixture: ComponentFixture<InformacionPrestamosAprobadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformacionPrestamosAprobadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacionPrestamosAprobadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
