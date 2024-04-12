import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'main',
    component: MainComponent
  }
  /*{
    path: 'main',
    component: AppComponent
  },
  {
    path: '',
    loadComponent: () =>
      import('./login/login.component')
      .then(m => m.LoginComponent)
  },*/
];
