import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ItemModel } from "../../common/models/item.model";
import { ItemsFilterCommand } from "../../common/commands/items-filter.command";
import { environment } from "../../../environments/environment";
import { Injectable } from "@angular/core";
import { AutoUnsubscribe } from "ngx-auto-unsubscribe-decorator";

@Injectable({
  providedIn: 'root'
})
export class ItemsProvider {

  readonly url = environment.apiUrl + 'items/';

  constructor(private http: HttpClient) {
  }

  @AutoUnsubscribe()
  filter(cmd: ItemsFilterCommand): Observable<ItemModel[]> {
    return this.http.post<ItemModel[]>(this.url + 'filter', cmd);
  }

}
