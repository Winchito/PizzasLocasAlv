import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PideEnLineaPage } from './pide-en-linea.page';

describe('PideEnLineaPage', () => {
  let component: PideEnLineaPage;
  let fixture: ComponentFixture<PideEnLineaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PideEnLineaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
