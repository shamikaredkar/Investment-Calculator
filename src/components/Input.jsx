import { React, useState } from "react";

export default function Input() {
  const [userinput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });
  return (
    <section id='user-input'>
      <div className='input-group'>
        <p>
          <label for='initial_investment'>Initial Investment</label>
          <input type='number' name='initial_investment' required />
        </p>
        <p>
          <label for='annual_investment'>Anual Investment</label>
          <input type='number' name='annual_investment' required />
        </p>
      </div>
      <div className='input-group'>
        <p>
          <label for='expected_return'>Expected Return</label>
          <input type='number' name='expected_return' required />
        </p>
        <p>
          <label for='duration'>Duration</label>
          <input type='number' name='duration' required />
        </p>
      </div>
    </section>
  );
}
