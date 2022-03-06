import React, { useState } from 'react';

function trad(income, entertainment, groceries, bills, savings_goal) {
    console.log(income);
    console.log(entertainment)
    console.log(groceries)
    console.log(bills)
    console.log(savings_goal);
    let net_savings = Number(income) - (Number(entertainment) + Number(groceries) + Number(bills));
    console.log(net_savings);
    let savings_diff = Number(net_savings) - Number(savings_goal);
    console.log(savings_diff);
  
    if (savings_diff >= 0) {
      console.log("GOOD JOB!");
    } else {
      console.log("ELIANA POOP IS SAD");
    }
  }

export default function Traditional(){
let final;
    let [income, setIncome] = useState(0);
    let [entertain, setEntertain] = useState(0);
    let [groc, setGroc] = useState(0);
    let [bills, setBills] = useState(0);
    let [savGoal, setSavgoal] = useState(0); 
    function submitFunction () {
     final = trad(income, entertain, groc, bills, savGoal);
    }

    
    return(
        // you need income, entertainment expenses, groceries expenses, regular bills, and the goal for savings
        <div>
        <input type="number" id="income" name="income" onChange={(event)=>{setIncome(event.target.value)}} value={income} /><br/>
        <input type="number" id="entertainment" name="entertainment" onChange={(event)=>{setEntertain(event.target.value)}} value={entertain} /><br/>
        <input type="number" id="groceries" name="groceries" onChange={(event)=>{setGroc(event.target.value)}} value={groc} /><br/>
        <input type="number" id="bills" name="bills" onChange={(event) => {setBills(event.target.value)}} value={bills} /><br/>
        <input type="number" id="savings_goal" name="savings_goal" onChange={(event)=>{setSavgoal(event.target.value)}} value={savGoal} /><br/>
        <button onClick={submitFunction}>
          <span>Add</span> 
        </button>
        

        <h1>{final}</h1>


        </div> 

    )
}