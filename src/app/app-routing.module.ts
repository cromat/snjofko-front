import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'items', loadChildren: () => import('./pages/items/items.module').then(m => m.ItemsModule) },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  { path: 'user', loadChildren: () => import('./pages/user/user.module').then(m => m.UserModule) },
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
