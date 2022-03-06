import React, { useState } from 'react';
import Inputs from './inputs';
import './forms.css';


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
    console.log(saving);
  } else {
    total_savings = extra_needs + extra_wants + allocated_savings;
    console.log(total_savings);
    console.log(total_savings);
  }
}

export default function Ftt() {

  let [income, setIncome] = useState(0);
  let [needs, setNeeds] = useState(0);
  let [wants, setWants] = useState(0);

  function submitFunction() {

    final = fifty_thirty_twenty(Number(income), Number(needs), Number(wants));
    console.log(income, needs, wants)
  }

  return (
    <div>
    <label>Income</label>
      <input  onChange={(event) => { setIncome(event.target.value) }} value={income} /><br />
      <label>Needs</label>
      <input  onChange={(event) => { setNeeds(event.target.value) }} value={needs} /><br />
      <label>Wants</label>
      <input  onChange={(event) => { setWants(event.target.value) }} value={wants} /><br />

      <button className='sbt-btn-1' onClick={submitFunction}>
        <span class="submit"><a href="#"></a></span>
      </button>



      <h1>{income}</h1>
    </div>

  )

}