import React, { useState } from 'react'

const annualData= {
    initialInvestment:0 ,
     annualInvestment:0 ,
   expectedReturn:0,
    duration:0 
}

const UserInput = (props) => {

    // const[annualData,setAnnualData]=useState([]);
    const[initialInvestment,setInitialInvestment]=useState(1000);
    const[annualInvestment,setAnnualInvestment]=useState(1200);
    const[expectedReturn,setExpectedReuturn]=useState(6);
    const[duration,setDuration]=useState(6);
 
    let dataCollected={...annualData,
        initialInvestment,
        annualInvestment,
        expectedReturn,
        duration
    };

    const validateDataCollected=(dataCollected)=>{

        
        for(const key in dataCollected){
              if(dataCollected.hasOwnProperty(key)){
                   if(dataCollected[key]<=0){
                    alert('Enter the valid details');
                    resetButton();
                       return false;
                   } 
              }
        }

         return true
    };
 
    const calculateButton=()=>{

        if(validateDataCollected(dataCollected)){
                 props.onCalculate(dataCollected);
        }
        else{
            return;
        }
    }
 
    const resetButton=()=>{
        setInitialInvestment(12000);
        setAnnualInvestment(12000);
        setExpectedReuturn(6);
        setDuration(6);
    } 

    const handleInputData=(indentifer,val)=>{

    
         if(indentifer==='initialInvestment'){
            setInitialInvestment(val);
         }
         else if(indentifer==='annualInvestment'){
          setAnnualInvestment(val);
         }
         else if(indentifer==='expectedReturn'){
    
            setExpectedReuturn(val);
         }
         else if(indentifer==='duration'){
            setDuration(val);
         }
    }


    // console.log(dataCollected);


  return (
    <section  id='user-input' > 
    
    <div className='input-group'>
    <p>
        <label>initialInvestment</label>
        <input  onChange={(e)=>handleInputData('initialInvestment',e.target.value)} type='number' required value={initialInvestment}  />
    </p>
    <p>
        <label> annualInvestment</label>
        <input onChange={(e)=>handleInputData('annualInvestment',e.target.value)} type='number' required value={annualInvestment} />
    </p>
    </div>
    <div className='input-group'>
    <p>
        <label> expectedReturn</label>
        <input onChange={(e)=>handleInputData('expectedReturn',e.target.value)} type='number' required value={expectedReturn} />
    </p>
    <p>
        <label>duration</label>
        <input onChange={(e)=>handleInputData('duration',e.target.value)} type='number' required value={duration} />
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
