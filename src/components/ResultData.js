import React from 'react'
import { formatter } from '../util/investment';


const ResultData = ({result}) => {

    //  console.log(result);
    let initialInvestment;
    if(result!==null){
     initialInvestment=result[0].valueEndOfYear - result[0].interest - result[0].annualInvestment ;
    }
  return (
    <table  id='result' className='center'>
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest(Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>

        <tbody>
               {
               result && ( 
                
           result.map((item,index)=> {
             const totalInterestValue = item.valueEndOfYear-item.annualInvestment*item.year - initialInvestment ;
             const totalAmountInvested=item.valueEndOfYear-totalInterestValue;
                return(
                    <tr key={index}>
                  <td>{item.year}</td>
                  <td>{ formatter.format(item.valueEndOfYear)}</td>
                  <td>{formatter.format(item.interest)}</td>
                  <td>{formatter.format(totalInterestValue)}</td>
                  <td>{formatter.format(totalAmountInvested)}</td>
                    </tr>)
}) ) }
                  
        </tbody>
      </table>
  )
}

export default ResultData ;
