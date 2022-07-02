import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsComponent } from "./items.component";

const routes: Routes = [
  { path: 'highlighted', pathMatch: 'full', component: ItemsComponent, data: { type: 'highlighted' } },
  { path: 'cars', pathMatch: 'full', component: ItemsComponent, data: { type: 'cars' } },
  { path: 'books', component: ItemsComponent, data: { type: 'books' } },
  { path: '**', redirectTo: 'highlighted' },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class ItemsRoutingModule {
}
