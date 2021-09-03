import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-compound",
  template: `
              <app-interest [obj]="compound"></app-interest>
            `
})
export class CompoundComponent implements OnInit {
  compound = {
    subTitle:   "Juros Composto",
    isSimple:   false,
    isCompound: true
  };

  constructor() { }

  ngOnInit(): void {
  }
}
