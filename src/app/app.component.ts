import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
              <app-header></app-header>
              <div class="main-container">
                <div class="main-content">
                  <router-outlet></router-outlet>
                </div>
              </div>
            `
})
export class AppComponent {
}
