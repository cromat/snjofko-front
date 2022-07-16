import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ItemsProvider } from "../../../../core/providers/items.provider";
import { SpinnerService } from "../../../../core/services/spinner.service";
import { finalize } from "rxjs";
import { ItemCreateCommand } from "../../model/commands/item-create.command";
import { ItemModel } from "../../../../common/models/item.model";
import { Router } from "@angular/router";

@Component({
  selector: 'app-item-create',
  templateUrl: './item-create.component.html',
  styleUrls: [ './item-create.component.less' ]
})
export class ItemCreateComponent implements OnInit {

  createItemForm!: FormGroup;

  constructor(private fb: FormBuilder,
              private itemsProvider: ItemsProvider,
              private spinner: SpinnerService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.createItemForm = this.fb.group({
      name: [ null, [ Validators.required ] ],
      category: [ null, [ Validators.required ] ],
      description: [ null ],
      isActive: [ true ]
    });
  }

  submitCreateItemForm() {
    this.spinner.show();
    this.itemsProvider.create(ItemCreateCommand.fromData(this.createItemForm.value))
      .pipe(finalize(() => this.spinner.hide()))
      .subscribe((res: ItemModel) => {
        this.router.navigate(['/items/' + res.id]).catch(console.error)
      })
  }

}
