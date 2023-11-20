import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CatalogoPedidoPage } from './catalogo-pedido.page';

describe('CatalogoPedidoPage', () => {
  let component: CatalogoPedidoPage;
  let fixture: ComponentFixture<CatalogoPedidoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CatalogoPedidoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
