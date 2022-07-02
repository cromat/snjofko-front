import { Component } from '@angular/core';
import { TokenStorageService } from "./core/services/token-storage.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  isCollapsed = false;

  constructor(public tss: TokenStorageService) {
  }

}
