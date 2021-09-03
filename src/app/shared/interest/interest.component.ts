import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector:    "app-interest",
  templateUrl: "./interest.component.html",
  styleUrls:   ["./interest.component.scss"]
})
export class InterestComponent implements OnInit {
  capital = NaN;
  fee = NaN;
  period = NaN;
  reference = NaN;
  interest = NaN;
  amount = NaN;
  periods = [6, 12, 18, 24, 30, 36];
  tableColumns = [
    "month",
    "reference",
    "fee",
    "interest",
    "amount"
  ];
  tableData = [
    {
      month:     NaN,
      reference: NaN,
      fee:       NaN,
      interest:  NaN,
      amount:    NaN
    }
  ];
  @Input() obj: Object | any;

  submit() {
    if (!this.error(this.capital, 1) && !this.error(this.fee, 2) && !this.error(this.period, 3)) {
      const calc = () => {
        for (let i = 1; i <= this.period; i++) {
          if (this.obj.isSimple) {
            this.reference = this.capital;
            this.interest = this.capital * (this.fee / 100);
            this.amount = this.capital * (1 + (this.fee / 100) * i);
          }
          if (this.obj.isCompound) {
            if (i === 1) {
              this.reference = this.capital;
              this.interest = this.capital * (this.fee / 100);
            }
            else {
              this.reference = this.amount;
              this.interest = this.amount * (this.fee / 100);
            }
            this.amount = this.capital * (1 + this.fee / 100) ** i;
          }
          this.tableData.push({
            month:     i,
            reference: this.reference,
            fee:       this.fee,
            interest:  this.interest,
            amount:    this.amount
          });
        }
      };
      const simulation: HTMLElement | null = document.querySelector(".simulation");
      const success: HTMLElement | null = document.querySelector(".success");
      this.tableData = [];
      calc();
      simulation!.style.display = "none";
      success!.style.display = "flex";
    }
  }

  enableBtn() {
    if (this.error(this.capital, 1) || this.error(this.fee, 2) || this.error(this.period, 3))
      return "disable";
    return "";
  }

  error(value: number, field: number) {
    let response = false;
    if (field === 1) {
      response = !(value > 0 && value <= 1000000);
    }
    else if (field === 2) {
      response = !(value > 0 && value <= 100);
    }
    else if (field === 3) {
      response = !(value);
    }
    return response;
  }

  back() {
    const simulation: HTMLElement | null = document.querySelector(".simulation");
    const success: HTMLElement | null = document.querySelector(".success");
    simulation!.style.display = "flex";
    success!.style.display = "none";
    this.capital = NaN;
    this.fee = NaN;
    this.period = NaN;
  }

  constructor() { }

  ngOnInit(): void {
  }
}
