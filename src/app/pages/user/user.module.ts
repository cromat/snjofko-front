import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NzListModule } from "ng-zorro-antd/list";
import { NzGridModule } from "ng-zorro-antd/grid";
import { UserRoutingModule } from "./user-routing.module";
import { UserDetailsComponent } from './components/user-details/user-details.component';

@NgModule({
  declarations: [
    UserDetailsComponent
  ],
  imports: [
    UserRoutingModule,
    CommonModule,
    NzListModule,
    NzGridModule
  ]
})
export class UserModule {
}
