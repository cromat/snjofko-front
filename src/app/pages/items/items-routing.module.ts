import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemListComponent } from "./components/item-list/item-list.component";
import { ItemCreateComponent } from "./components/item-create/item-create.component";
import { ItemDetailsComponent } from "./components/item-details/item-details.component";

const routes: Routes = [
  { path: 'highlighted', pathMatch: 'full', component: ItemListComponent, data: { type: 'highlighted' } },
  { path: 'cars', pathMatch: 'full', component: ItemListComponent, data: { type: 'cars' } },
  { path: 'books', component: ItemListComponent, data: { type: 'books' } },
  { path: 'create', component: ItemCreateComponent },
  { path: ':id', component: ItemDetailsComponent },
  { path: '**', redirectTo: 'highlighted' },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class ItemsRoutingModule {
}
