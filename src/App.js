import React, { useState } from 'react'
import Header from './components/Header'
import UserInput from './components/UserInput'
import ResultData from './components/ResultData';
import { calculateInvestmentResults } from './util/investment';
const App = () => {

  const[result,setResult]=useState(null);
  
  const handleCalculate=(dataCollected)=>{
    // console.log('in app component' , dataCollected)
    // console.log(calculateInvestmentResults(dataCollected))
     setResult(calculateInvestmentResults(dataCollected));
  }

  return (
<>
    <Header />

    
    <UserInput onCalculate={handleCalculate}  />
    
     <ResultData result={result} />
  

</>
    
  )
}

export default App
