import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrosTiempo } from './registros-tiempo';

describe('RegistrosTiempo', () => {
  let component: RegistrosTiempo;
  let fixture: ComponentFixture<RegistrosTiempo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrosTiempo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrosTiempo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
