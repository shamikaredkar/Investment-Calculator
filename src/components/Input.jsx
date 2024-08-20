import { React, useState } from "react";

export default function Input() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(inputIdentifier, value) {
    //previousInput here is userInput -- the current state of the value
    setUserInput((previousInput) => {
      return {
        //Spreads all the property values
        ...previousInput,
        //updates only the specific property
        [inputIdentifier]: value,
      };
    });
  }

  return (
    <section id='user-input'>
      <div className='input-group'>
        <p>
          <label for='initial_investment'>Initial Investment</label>
          <input
            type='number'
            name='initial_investment'
            value={userInput.initialInvestment}
            required
            onChange={(e) => handleChange("initialInvestment", e.target.value)}
          />
        </p>
        <p>
          <label for='annual_investment'>Anual Investment</label>
          <input
            type='number'
            name='annual_investment'
            value={userInput.annualInvestment}
            required
            onChange={(e) => handleChange("annualInvestment", e.target.value)}
          />
        </p>
      </div>
      <div className='input-group'>
        <p>
          <label for='expected_return'>Expected Return</label>
          <input
            type='number'
            name='expected_return'
            value={userInput.expectedReturn}
            required
            onChange={(e) => handleChange("expectedReturn", e.target.value)}
          />
        </p>
        <p>
          <label for='duration'>Duration</label>
          <input
            type='number'
            name='duration'
            required
            value={userInput.duration}
            onChange={(e) => handleChange("duration", e.target.value)}
          />
        </p>
      </div>
    </section>
  );
}
