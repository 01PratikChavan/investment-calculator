import React from 'react'

const ResultData = ({result}) => {
     // console.log('in result component',result);
     console.log(result);
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
                result.map((item,index)=>
                    <tr key={index}>
                  <td>{item.year}</td>
                  <td>{item.interest}</td>
                  <td>{item.valueEndOfYear}</td>
                  <td>{item.annualInvestment}</td>
                    </tr>
               ) )
          }         
        </tbody>
      </table>
  )
}

export default ResultData ;
