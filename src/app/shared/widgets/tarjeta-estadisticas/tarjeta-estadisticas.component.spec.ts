import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaEstadisticasComponent } from './tarjeta-estadisticas.component';

describe('TarjetaEstadisticasComponent', () => {
  let component: TarjetaEstadisticasComponent;
  let fixture: ComponentFixture<TarjetaEstadisticasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarjetaEstadisticasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarjetaEstadisticasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
