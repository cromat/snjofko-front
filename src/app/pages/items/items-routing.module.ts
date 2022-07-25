import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ItemListComponent } from "./components/item-list/item-list.component";

const routes: Routes = [
  { path: 'cars', pathMatch: 'full', component: ItemListComponent, data: { type: 'cars'} },
  { path: 'electronics', pathMatch: 'full', component: ItemListComponent, data: { type: 'electronics'} },
  { path: 'books', pathMatch: 'full', component: ItemListComponent, data: { type: 'books'} },
  { path: '**', pathMatch: 'full', redirectTo: 'cars' }
]

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class ItemsRoutingModule {

}
