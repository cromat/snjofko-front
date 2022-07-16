import { Component, OnInit } from '@angular/core';
import { ItemsProvider } from "../../../../core/providers/items.provider";
import { ItemModel } from "../../../../common/models/item.model";
import { ItemsFilterCommand } from "../../model/commands/items-filter.command";

@Component({
  selector: 'app-items',
  templateUrl: './item-list.component.html',
  styleUrls: [ './item-list.component.less' ]
})
export class ItemListComponent implements OnInit {
  items: ItemModel[] = [];

  constructor(private itemsProvider: ItemsProvider) {
  }

  ngOnInit(): void {
    this.filterItems(new ItemsFilterCommand());
  }

  onItemsFilter($event: ItemsFilterCommand) {
      this.filterItems($event);
  }

  filterItems(cmd: ItemsFilterCommand) {
    this.itemsProvider.filter(cmd).subscribe((res: ItemModel[]) => {
      this.items = res ?? [];
    })
  }

}
