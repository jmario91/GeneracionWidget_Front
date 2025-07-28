import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckListDocumentosComponent } from './check-list-documentos.component';

describe('CheckListDocumentosComponent', () => {
  let component: CheckListDocumentosComponent;
  let fixture: ComponentFixture<CheckListDocumentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckListDocumentosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckListDocumentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
