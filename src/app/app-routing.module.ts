import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginGuard} from "./core/guards/login.guard";

const routes: Routes = [
  { path: '', pathMatch: 'full',  redirectTo: '/items/highlighted' },
  { path: 'items', canActivate: [LoginGuard], loadChildren: () => import('./pages/items/items.module').then(m => m.ItemsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
