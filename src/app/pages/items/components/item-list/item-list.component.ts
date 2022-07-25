import { Component, OnInit } from '@angular/core';
import { ItemModel } from "../../models/dto/item.model";
import { ItemProvider } from "../../../../core/providers/item.provider";
import { ItemsFilterCommand } from "../../models/commands/items-filter.command";

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: [ './item-list.component.less' ]
})
export class ItemListComponent implements OnInit {

  itemList: ItemModel[] = [];

  constructor(private itemProvider: ItemProvider) {
  }

  ngOnInit(): void {
    this.itemProvider.filterItems(new ItemsFilterCommand())
      .subscribe((res: ItemModel[]) => {
        this.itemList = res;
      })
  }

}
