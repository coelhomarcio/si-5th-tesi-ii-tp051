import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-head",
  template: `<h1>{{ title }}</h1>`
})
export class HeadComponent implements OnInit {
  @Input() title: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }
}
