import { inject, Injectable } from "@angular/core";
import { InvestmentInput } from "../app/datatypes/investmentinput";
import { InvestmentYearResult } from "../app/datatypes/investmentyearresult";

@Injectable({
    providedIn: 'root'
})
export class InvestmentService {
    results?: InvestmentYearResult[];
    calculateInvestmentResults(data: InvestmentInput) {
        const { initialInvestment, annualInvestment, expectedReturn, duration } = data;
        const annualData: InvestmentYearResult[] = [];
        let investmentValue = initialInvestment;


        for (let i = 0; i < data.duration; i++) {
            const year = i + 1;
            const interestEarnedInYear = investmentValue * (expectedReturn / 100);
            investmentValue += interestEarnedInYear + annualInvestment;
            const totalInterest =
                investmentValue - annualInvestment * year - initialInvestment;
            annualData.push({
                year: year,
                interest: interestEarnedInYear,
                valueEndOfYear: investmentValue,
                annualInvestment: annualInvestment,
                totalInterest: totalInterest,
                totalAmountInvested: initialInvestment + annualInvestment * year,
            });
        }
        this.results = annualData;
    }


}