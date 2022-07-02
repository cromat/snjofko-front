import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ItemsComponent} from "./items.component";

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'highlighted'},
  {path: 'highlighted', component: ItemsComponent, data: {type: 'highlighted'}},
  {path: 'cars', component: ItemsComponent, data: {type: 'cars'}},
  {path: 'books', component: ItemsComponent, data: {type: 'books'}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemsRoutingModule {
}
