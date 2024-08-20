import { React, useState } from "react";

export default function Input({ onChange, userInput }) {
  return (
    <section id='user-input'>
      <div className='input-group'>
        <p>
          <label>Initial Investment</label>
          <input
            type='number'
            name='initial_investment'
            value={userInput.initialInvestment}
            required
            onChange={(e) => onChange("initialInvestment", e.target.value)}
          />
        </p>
        <p>
          <label>Anual Investment</label>
          <input
            type='number'
            name='annual_investment'
            value={userInput.annualInvestment}
            required
            onChange={(e) => onChange("annualInvestment", e.target.value)}
          />
        </p>
      </div>
      <div className='input-group'>
        <p>
          <label>Expected Return</label>
          <input
            type='number'
            name='expected_return'
            value={userInput.expectedReturn}
            required
            onChange={(e) => onChange("expectedReturn", e.target.value)}
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type='number'
            name='duration'
            required
            value={userInput.duration}
            onChange={(e) => onChange("duration", e.target.value)}
          />
        </p>
      </div>
    </section>
  );
}
