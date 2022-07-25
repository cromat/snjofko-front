import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ItemModel } from "../../pages/items/models/dto/item.model";
import { ItemsFilterCommand } from "../../pages/items/models/commands/items-filter.command";

@Injectable({
  providedIn: 'root'
})
export class ItemProvider {

  readonly url = environment.apiUrl + 'items/';

  constructor(private http: HttpClient) {
  }

  filterItems(cmd: ItemsFilterCommand): Observable<ItemModel[]> {
    return this.http.post<ItemModel[]>(this.url + 'filter', cmd);
  }

}
