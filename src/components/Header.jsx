import React from "react";
import headerImg from "/src/assets/investment-calculator-logo.png";

export default function hEADER() {
  return (
    <div id='header'>
      <img src={headerImg} alt='Logo' />
      <h1>Investment Calculator</h1>
    </div>
  );
}
