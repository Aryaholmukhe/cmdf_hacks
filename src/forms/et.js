import React, {useState} from 'react';
import './forms.css';
import Description from "./descrip"

let final;
function eighty_twenty (income, savings_choice, expenses_choice) {
    let save = 0.2;
    let expense = 0.8;
    let current_month = 1;
    let goal_achieved = false;
  
    while (goal_achieved == false) {
      for (let i = 0; i < 2; i++) {
        let savings = income * save;
        let expenses = income * expense;
        final = "Month " + current_month + ": " + savings + " (savings), " + expenses + " (expenses)\n";
        current_month += 1;
      }
      if (savings_choice == save && expenses_choice == expense) {
        goal_achieved = true;
        break;
      }
      save += 0.1;
      expense -= 0.1;
    }  
}

export default function Et() {

    let [income, setIncome] = useState(0);
    let [savingsChoice, setSavingsChoice] = useState(0);
    let [expensesChoice, setExpensesChoice] = useState(0);

    function submitFunction() {
        eighty_twenty(Number(income), Number(savingsChoice)/100, Number(expensesChoice)/100);
    }

    return (
        <div>
            <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
          <Description class="desc" title="80/20 Method" content="The 80/20 method is a more basic technique than the 50/30/20 version. You would start with 20% to savings and 80% to needs. Eventually, with time, your savings could be increased to 75/25, 60/40, and so forth." />
          </div>
          <div class="flip-card-back">
            
                <label>Income</label>
                <input onChange={(event) => { setIncome(event.target.value) }} value={income} /><br />
                <label>Savings Choice</label>
                <input onChange={(event) => { setSavingsChoice(event.target.value) }} value={savingsChoice} /><br />
                <label>Expenses Choice</label>
                <input onChange={(event) => { setExpensesChoice(event.target.value) }} value={expensesChoice}/><br />
                <button className='sbt-btn-1' onClick={submitFunction}>
              <span class="submit"><a></a></span>
            </button>

            <div>
                <p className="ans" >{final}</p>
            </div>
            </div>
            </div>
            </div>
        </div>
    )
}