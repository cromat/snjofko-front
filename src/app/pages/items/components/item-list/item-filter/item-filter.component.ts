import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { ItemsFilterCommand } from "../../../model/commands/items-filter.command";

@Component({
  selector: 'app-item-filter',
  templateUrl: './item-filter.component.html',
  styleUrls: ['./item-filter.component.less']
})
export class ItemFilterComponent implements OnInit {

  @Output() submittedItemFilterForm: EventEmitter<ItemsFilterCommand> = new EventEmitter();

  itemFilterForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.itemFilterForm = this.fb.group({
      name: [ '' ],
      category: [ '' ],
      dateFrom: [ null ],
      dateTo: [ null ]
    });
  }

  submitItemFilterForm() {
    if (this.itemFilterForm.dirty) {
      this.submittedItemFilterForm.emit(this.itemFilterForm.value);
    }
  }

}
