import React, { useState } from 'react'

const annualData= {
    initialInvestment:0 ,
     annualInvestment:0 ,
   expectedReturn:0,
    duration:0 
}

const UserInput = (props) => {

    // const[annualData,setAnnualData]=useState([]);
    const[initialInvestment,setInitialInvestment]=useState(0);
    const[annualInvestment,setAnnualInvestment]=useState(0);
    const[expectedReturn,setExpectedReuturn]=useState(0);
    const[duration,setDuration]=useState(0);
 
    let dataCollected={...annualData,
        initialInvestment,
        annualInvestment,
        expectedReturn,
        duration
    };
 
    const calculateButton=()=>{
        props.onCalculate(dataCollected);
    }
 
    const resetButton=()=>{
        setInitialInvestment(0);
        setAnnualInvestment(0);
        setExpectedReuturn(0);
        setDuration(0);
    } 

    // console.log(dataCollected);


  return (
    <section  id='user-input' > 
    <div className='input-group'>
    <p>
        <label>initialInvestment</label>
        <input  onChange={(e)=>{
             setInitialInvestment(e.target.value)
        }} type='number' required value={initialInvestment}  />
    </p>
    <p>
        <label> annualInvestment</label>
        <input onChange={(e)=>{
            setAnnualInvestment(e.target.value)
        }} type='number' required value={annualInvestment} />
    </p>
    </div>
    <div className='input-group'>
    <p>
        <label> expectedReturn</label>
        <input onChange={(e)=>{setExpectedReuturn(e.target.value)}} type='number' required value={expectedReturn} />
    </p>
    <p>
        <label>duration</label>
        <input onChange={(e)=>{setDuration(e.target.value)}} type='number' required value={duration} />
    </p>
    </div>
    <div id='cal-section'>
    <button className='btn' onClick={calculateButton}>Calculate</button>
    <button className='btn' onClick={resetButton}>Reset</button>
    </div>
    </section>
  )
}

export default UserInput
