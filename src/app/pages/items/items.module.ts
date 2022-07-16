import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemsRoutingModule } from './items-routing.module';
import { ItemListComponent } from './components/item-list/item-list.component';
import { NzListModule } from "ng-zorro-antd/list";
import { NzGridModule } from "ng-zorro-antd/grid";
import { ItemCreateComponent } from './components/item-create/item-create.component';
import { NzFormModule } from "ng-zorro-antd/form";
import { NzInputModule } from "ng-zorro-antd/input";
import { NzCheckboxModule } from "ng-zorro-antd/checkbox";
import { ReactiveFormsModule } from "@angular/forms";
import { NzButtonModule } from "ng-zorro-antd/button";
import { ItemDetailsComponent } from './components/item-details/item-details.component';
import { NzDescriptionsModule } from "ng-zorro-antd/descriptions";
import { ItemFilterComponent } from './components/item-list/item-filter/item-filter.component';


@NgModule({
  declarations: [
    ItemListComponent,
    ItemCreateComponent,
    ItemDetailsComponent,
    ItemFilterComponent
  ],
    imports: [
        CommonModule,
        ItemsRoutingModule,
        NzListModule,
        NzGridModule,
        NzFormModule,
        NzInputModule,
        NzCheckboxModule,
        ReactiveFormsModule,
        NzButtonModule,
        NzDescriptionsModule
    ]
})
export class ItemsModule { }
