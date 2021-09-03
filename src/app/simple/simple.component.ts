import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-simple",
  template: `
              <app-interest [obj]="simple"></app-interest>
            `
})
export class SimpleComponent implements OnInit {
  simple = {
    subTitle:   "Juros Simples",
    isSimple:   true,
    isCompound: false
  };

  constructor() { }

  ngOnInit(): void {
  }
}
