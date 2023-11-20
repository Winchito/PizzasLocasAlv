import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfoUsuariosPage } from './info-usuarios.page';

describe('InfoUsuariosPage', () => {
  let component: InfoUsuariosPage;
  let fixture: ComponentFixture<InfoUsuariosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InfoUsuariosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
