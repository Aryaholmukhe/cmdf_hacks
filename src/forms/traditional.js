import React, { useState } from 'react';
import "./forms.css";
import Description from "./descrip"

let saving, final;
function trad(income, entertainment, groceries, bills, savings_goal) {
  console.log(income);
  console.log(entertainment);
  console.log(groceries);
  console.log(bills);
  console.log(savings_goal);
  let net_savings = Number(income) - (Number(entertainment) + Number(groceries) + Number(bills));
  console.log(net_savings);
  let savings_diff = Number(net_savings) - Number(savings_goal);
  console.log(savings_diff);

  if (savings_diff >= savings_goal) {
    saving = savings_goal - savings_diff;
    return "GOOD JOB!"
  } else {
    saving = savings_goal+savings_diff;
    return "ELIANA POOP IS SAD!";
  }
}

export default function Traditional() {

  let [income, setIncome] = useState(0);
  let [entertain, setEntertain] = useState(0);
  let [groc, setGroc] = useState(0);
  let [bills, setBills] = useState(0);
  let [savGoal, setSavgoal] = useState(0);
  function submitFunction() {
    final = JSON.stringify(trad(income, entertain, groc, bills, savGoal));
  }


  return (
    // you need income, entertainment expenses, groceries expenses, regular bills, and the goal for savings
    <div>

      {/* <h1>{final}</h1>
      <h2>You have saved {saving}</h2> */}

      {/* this is a flip card containing the form */}
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <Description class="desc" title="Traditional Method" content="The traditional method is a very basic type of budgeting. It involves three elements: your income, expenditure and savings goal. You subtract your expenditure from your income and you have your net savings for that month. Compare your net savings to your savings goal. If you have met or exceeded your goal, keep doing what you are doing! If not, try to see when you can cut down on such as entertainment." />
          </div>
          <div class="flip-card-back">
            <label for="name" className="form__label">Income</label>
            <input placeholder='Income' type="number" id="income" className="form__input name" name="income" onChange={(event) => { setIncome(event.target.value) }} value={income} /><br />
            <label for="name" className="form__label">Entertainment</label>
            <input placeholder="Entertainment" type="number" id="entertainment" className="form__input name" name="entertainment" onChange={(event) => { setEntertain(event.target.value) }} value={entertain} /><br />
            <label for="name" className="form__label">Groceries</label>
            <input placeholder="Groceries" type="number" id="groceries" className="form__input name" name="groceries" onChange={(event) => { setGroc(event.target.value) }} value={groc} /><br />
            <label for="name" className="form__label">Bills</label>
            <input placeholder="Bills" type="number" id="bills" className="form__input name" name="bills" onChange={(event) => { setBills(event.target.value) }} value={bills} /><br />
            <label for="name" className="form__label">Saving Goals</label>
            <input placeholder="Goals" type="number" id="savings_goal" className="form__input name" name="savings_goal" onChange={(event) => { setSavgoal(event.target.value) }} value={savGoal} /><br />

            <button className='sbt-btn-1' onClick={submitFunction}>
              <span class="submit"><a></a></span>
            </button>
            <h1>Here {saving}</h1>
          </div>
        </div>
      </div>



    </div>

  )
}