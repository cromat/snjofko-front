import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IsLoggedInGuard } from "./core/guards/is-logged-in-guard.service";
import { HomeComponent } from "./pages/home/home.component";

const routes: Routes = [
  { path: 'items', loadChildren: () => import('./pages/items/items.module').then(m => m.ItemsModule), canActivate: [ IsLoggedInGuard ] },
  { path: 'auth', loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule) },
  { path: '', pathMatch: 'full', component: HomeComponent, canActivate: [ IsLoggedInGuard ] },
  { path: '**', pathMatch: 'full', redirectTo: '' }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
