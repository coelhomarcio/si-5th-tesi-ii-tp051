import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-head",
  template: `<h1>{{ title }}</h1>`,
  styles: ["h1 { font-size: 2.7rem }"]
})
export class HeadComponent implements OnInit {
  @Input() title: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }
}
