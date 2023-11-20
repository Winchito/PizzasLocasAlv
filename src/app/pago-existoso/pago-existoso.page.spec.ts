import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PagoExistosoPage } from './pago-existoso.page';

describe('PagoExistosoPage', () => {
  let component: PagoExistosoPage;
  let fixture: ComponentFixture<PagoExistosoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PagoExistosoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
