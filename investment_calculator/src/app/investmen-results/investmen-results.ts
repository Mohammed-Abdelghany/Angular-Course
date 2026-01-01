import { Component, Input } from '@angular/core';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { InvestmentYearResult } from '../datatypes/investmentyearresult';

@Component({
  selector: 'app-investmen-results',
  imports: [CurrencyPipe, DatePipe],
  templateUrl: './investmen-results.html',
  styleUrl: './investmen-results.css',
})
export class InvestmenResults {
  @Input() results?: InvestmentYearResult[];

}
