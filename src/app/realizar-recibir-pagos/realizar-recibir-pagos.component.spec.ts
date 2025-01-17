import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealizarRecibirPagosComponent } from './realizar-recibir-pagos.component';

describe('RealizarRecibirPagosComponent', () => {
  let component: RealizarRecibirPagosComponent;
  let fixture: ComponentFixture<RealizarRecibirPagosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealizarRecibirPagosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RealizarRecibirPagosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
