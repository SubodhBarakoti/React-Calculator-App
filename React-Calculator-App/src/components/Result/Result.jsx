import { calculateInvestmentResults, formatter } from "../../util/investment.js";

export default function Result({value}){
    const calculatedValue = calculateInvestmentResults(value);
    const initialInvestment = calculatedValue[0].valueEndOfYear - calculatedValue[0].interest - calculatedValue[0].annualInvestment;
    return(
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                { calculatedValue.map((item, rowIndex)=>{
                    const totalInterest = item.valueEndOfYear - item.annualInvestment * item.year - initialInvestment;
                    const totalAmountInvested = item.valueEndOfYear - totalInterest;

                    return(
                        <tr key={rowIndex}>
                            <td>{item.year}</td>
                            <td>{formatter.format(item.valueEndOfYear)}</td>
                            <td>{formatter.format(item.interest)}</td>
                            <td>{formatter.format(totalInterest)}</td>
                            <td>{formatter.format(totalAmountInvested)}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}