import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaPorcentajeComponent } from './tabla-porcentaje.component';

describe('ListaPorcentajeComponent', () => {
  let component: TablaPorcentajeComponent;
  let fixture: ComponentFixture<TablaPorcentajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablaPorcentajeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaPorcentajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
