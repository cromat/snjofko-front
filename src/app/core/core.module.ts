import { NgModule } from "@angular/core";
import { SpinnerComponent } from './components/spinner/spinner.component';
import { NzSpinModule } from "ng-zorro-antd/spin";

@NgModule({
  imports: [
    NzSpinModule
  ],
  declarations: [
    SpinnerComponent
  ]
})
export class CoreModule {}
