import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  template: `
              <mat-toolbar color="warn">
                <app-head [title]="title"></app-head>
                <app-nav></app-nav>
              </mat-toolbar>
            `,
  styles:   ["mat-toolbar { box-shadow: 0 0 .5rem #121212; justify-content: space-between; }"]
})
export class HeaderComponent implements OnInit {
  title = "Cálculo de Juros";

  constructor() { }

  ngOnInit(): void {
  }
}
