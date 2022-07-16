import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ItemsProvider } from "../../../../core/providers/items.provider";
import { ItemModel } from "../../../../common/models/item.model";
import { SpinnerService } from "../../../../core/services/spinner.service";
import { finalize } from "rxjs";

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.less']
})
export class ItemDetailsComponent implements OnInit {

  itemId: number = 0;
  item: ItemModel | null = null;

  constructor(private activatedRoute: ActivatedRoute,
              private itemsProvider: ItemsProvider,
              private spinner: SpinnerService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(p => {
      this.itemId = +p['id'];
      this.initData();
    });
  }

  private initData() {
    this.spinner.show();
    this.itemsProvider.getItem(this.itemId)
      .pipe(finalize(() => this.spinner.hide()))
      .subscribe((res: ItemModel) => this.item = res);
  }

}
