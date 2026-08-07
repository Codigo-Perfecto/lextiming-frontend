import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagoDialog } from './pago-dialog';

describe('PagoDialog', () => {
  let component: PagoDialog;
  let fixture: ComponentFixture<PagoDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagoDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagoDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
