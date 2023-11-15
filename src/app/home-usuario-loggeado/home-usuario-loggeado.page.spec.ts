import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeUsuarioLoggeadoPage } from './home-usuario-loggeado.page';

describe('HomeUsuarioLoggeadoPage', () => {
  let component: HomeUsuarioLoggeadoPage;
  let fixture: ComponentFixture<HomeUsuarioLoggeadoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HomeUsuarioLoggeadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
