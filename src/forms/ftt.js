import React, { useState } from 'react';
import './forms.css';
import Description from "./descrip"


let final, saving, total_savings;
// this ftt() allows you to compare your ideal ftt plan to your current expenditures
function fifty_thirty_twenty(income, needs, wants) {
  let allocated_needs = 0.5 * income;
  let allocated_wants = 0.3 * income;
  let allocated_savings = 0.2 * income;

  let extra_needs = allocated_needs - needs;
  let extra_wants = allocated_wants - wants;

  if (extra_needs < 0 || extra_wants < 0) {
    saving = income + (extra_needs + extra_wants);
    return `OH NO! You only saved ${saving}`;
  } else {
    total_savings = extra_needs + extra_wants + allocated_savings;
    return `You saved ${total_savings}`;
  }
}

export default function Ftt() {

  let [income, setIncome] = useState(0);
  let [needs, setNeeds] = useState(0);
  let [wants, setWants] = useState(0);

  function submitFunction() {

    final = fifty_thirty_twenty(Number(income), Number(needs), Number(wants));
    document.getElementById('final2').innerHTML = final;
    console.log(income, needs, wants)
  }

  return (
    <div>
    <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
          <Description class="desc" title="50/30/20 Method" content="The 50/30/20 method breaks up your expenses into three categories; needs, wants, and savings. Half of your net income goes to needs, 30% goes to wants such as leisure practices, and 20% goes to your savings." />
</div>

          <div class="flip-card-back">
    <label for="name" className="form__label">Income</label>
      <input  placeholder='Income' type="number" id="income" className="form__input name"  onChange={(event) => { setIncome(event.target.value) }} value={income} /><br />
      <label for="name" className="form__label">Needs</label>
      <input  placeholder='Income' type="number" id="income" className="form__input name"  onChange={(event) => { setNeeds(event.target.value) }} value={needs} /><br />
      <label for="name" className="form__label">Wants</label>
      <input  placeholder='Income' type="number" id="income" className="form__input name"  onChange={(event) => { setWants(event.target.value) }} value={wants} /><br />

      <button className='sbt-btn-1' onClick={submitFunction}>
        <span class="submit"><a href="#"></a></span>
      </button>
      
      <h1 id='final2'></h1>
      </div>
</div>
</div>


    </div>

  )

}