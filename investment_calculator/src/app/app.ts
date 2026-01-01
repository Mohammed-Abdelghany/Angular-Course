import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./header/header";
import { Userinput } from "./userinput/userinput";
import { InvestmentYearResult } from './datatypes/investmentyearresult';
import { InvestmenResults } from "./investmen-results/investmen-results";
import { InvestmentInput } from './datatypes/investmentinput';
import { InvestmentService } from '../services/investmentservice';
@Component({
  selector: 'app-root',
  imports: [Header, Userinput, InvestmenResults],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {


  constructor(private investmentService: InvestmentService) {
  }
  results?: InvestmentYearResult[];
  calculateInvestmentResults(data: InvestmentInput) {
    this.investmentService.calculateInvestmentResults(data);
    this.results = this.investmentService.results;
  }


}





