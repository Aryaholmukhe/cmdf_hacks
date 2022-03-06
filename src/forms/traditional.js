import React, { useState } from 'react';
import Inputs from "./inputs";
import "./forms.css";

let saving, final;
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
  
    if (savings_diff >= savings_goal) {
        saving = savings_goal-savings_diff;
      return "GOOD JOB!"
    } else {
      return "ELIANA POOP IS SAD!";
    }
  }

export default function Traditional(){

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
        <div className='all'>
        <div className='ask'>
        <Inputs name="Income" item="income" onChange={(event)=>{setIncome(event.target.value)}} value={income} /><br/>
        <Inputs name="Entertainment expenses" item="entertain" onChange={(event)=>{setEntertain(event.target.value)}} value={entertain} /><br/>
        <Inputs name="Groceries expenses" item="groceries" onChange={(event)=>{setGroc(event.target.value)}} value={groc} /><br/>
        <Inputs name="Bills expenses" item="bills" onChange={(event) => {setBills(event.target.value)}} value={bills} /><br/>
        <Inputs name="Saving Goals" item="savGoals" onChange={(event)=>{setSavgoal(event.target.value)}} value={savGoal} /><br/>
        </div>
        <div className='ans'>
        <button className='add' onClick={submitFunction}>
          <span>Add</span> 
        </button>

        <h1>{}</h1>
        </div>
        

        <h1>{final}</h1>
        <h2>You have saved {saving}</h2>


        </div> 

    )
}