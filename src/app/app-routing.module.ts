import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'verificar-email',
    loadChildren: () => import('./verificar-email/verificar-email.module').then( m => m.VerificarEmailPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'logout',
    loadChildren: () => import('./logout/logout.module').then( m => m.LogoutPageModule)
  },
  {
    path: 'recuperar-contra',
    loadChildren: () => import('./recuperar-contra/recuperar-contra.module').then( m => m.RecuperarContraPageModule)
  },
  {
    path: 'home-usuario-loggeado',
    loadChildren: () => import('./home-usuario-loggeado/home-usuario-loggeado.module').then( m => m.HomeUsuarioLoggeadoPageModule)
  },
  {
    path: 'pide-en-linea',
    loadChildren: () => import('./pide-en-linea/pide-en-linea.module').then( m => m.PideEnLineaPageModule)
  },
  {
    path: 'menu-principal',
    loadChildren: () => import('./menu-principal/menu-principal.module').then( m => m.MenuPrincipalPageModule)
  },
  {
    path: 'catalogo',
    loadChildren: () => import('./catalogo/catalogo.module').then( m => m.CatalogoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
