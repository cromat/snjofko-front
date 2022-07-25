import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UserDetailsComponent } from "./components/user-details/user-details.component";

const routes: Routes = [
  { path: 'details', component: UserDetailsComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'details' }
]

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class UserRoutingModule {

}
