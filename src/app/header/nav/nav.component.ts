import { Component, OnInit } from "@angular/core";

@Component({
  selector:    "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls:   ["./nav.component.scss"]
})
export class NavComponent implements OnInit {
  navList = [
    { label: "Home", link: "home" },
    { label: "Juros Simples", link: "simple" },
    { label: "Juros Composto", link: "compound" }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
