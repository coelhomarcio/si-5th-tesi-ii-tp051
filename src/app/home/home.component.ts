import { Component, OnInit } from "@angular/core";

@Component({
  selector:    "app-home",
  templateUrl: "./home.component.html",
  styleUrls:   ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  subTitle = "Home";
  name = "Marcio Rodrigues Paiva Coelho";
  ra = "0050831921015";
  gits = [
    { label: "GitHub Page", link: "https://coelhomarcio.github.io" },
    { label: "Repositório GitHub", link: "https://github.com/coelhomarcio" }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
