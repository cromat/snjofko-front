import { NgModule } from "@angular/core";
import { ItemListComponent } from "./components/item-list/item-list.component";
import { CommonModule } from "@angular/common";
import { NzListModule } from "ng-zorro-antd/list";
import { NzGridModule } from "ng-zorro-antd/grid";
import { ItemsRoutingModule } from "./items-routing.module";

@NgModule({
  declarations: [
    ItemListComponent
  ],
  imports: [
    ItemsRoutingModule,
    CommonModule,
    NzListModule,
    NzGridModule
  ]
})
export class ItemsModule {
}
