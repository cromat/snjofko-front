import { Component, OnInit } from '@angular/core';
import { ItemsProvider } from "../../core/providers/items.provider";
import { ItemModel } from "../../common/models/item.model";
import { ItemsFilterCommand } from "../../common/commands/items-filter.command";

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: [ './items.component.less' ]
})
export class ItemsComponent implements OnInit {
  items: ItemModel[] = [];

  constructor(private itemsProvider: ItemsProvider) {
  }

  ngOnInit(): void {
    this.itemsProvider.filter(new ItemsFilterCommand()).subscribe((res: ItemModel[]) => {
      this.items = res ?? [];
    })
  }

}
