import React, { useState } from 'react';
import "./forms.css";
import Description from "./descrip"

let saving, final;
function trad(income, entertainment, groceries, bills, savings_goal) {
  let net_savings = Number(income) - (Number(entertainment) + Number(groceries) + Number(bills));

  if (net_savings > savings_goal) {
    let savings_diff = Number(net_savings) - Number(savings_goal);
    var string1 = `Good Job! You saved more than your goal by ${savings_diff}.`;
    return <h1>{string1}</h1>;
  } else if(net_savings<savings_goal){
    let savings_diff = Number(net_savings) - Number(savings_goal);
    var string2 = `Are you kidding me? Save more by ${savings_diff}, spend less!`;
    return <h1>{string2}</h1>;
  }else{
    var string3 = "Not Bad! You saved just as much as you said that you would.";
    return <h1>{string3}</h1>;
  }
}


export default function Traditional() {

  let [income, setIncome] = useState(0);
  let [entertain, setEntertain] = useState(0);
  let [groc, setGroc] = useState(0);
  let [bills, setBills] = useState(0);
  let [savGoal, setSavgoal] = useState(0);
  function submitFunction() {
    final = trad(income, entertain, groc, bills, savGoal);
    final = final.props.children;
    console.log(saving);
    document.getElementById('final').innerHTML = final;
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
            <div id='final'></div>
          </div>

        </div>
      </div>
    </div>

  )
}