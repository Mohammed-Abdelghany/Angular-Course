import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentInput } from '../datatypes/investmentinput';

@Component({
  selector: 'app-userinput',
  imports: [FormsModule],
  templateUrl: './userinput.html',
  styleUrl: './userinput.css',
})
export class Userinput {

  initialInvestment = "0";
  annualInvestment = "0";
  expectedReturn = "5";
  duration = "10";


  @Output() onCalculateInvestment = new EventEmitter<InvestmentInput>();


  onCalculate() {
    this.onCalculateInvestment.emit({
      initialInvestment: +this.initialInvestment,
      annualInvestment: +this.annualInvestment,
      expectedReturn: +this.expectedReturn,
      duration: +this.duration
    });
    this.initialInvestment = "0";
    this.annualInvestment = "0";
    this.expectedReturn = "5";
    this.duration = "10";


  }

}
