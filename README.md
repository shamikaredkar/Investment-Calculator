<div align="center"><h2>Investment Calculator - <a href="https://investment-calculator-shamikaredkar.vercel.app/">DEMO</a></h2></div>

<div align="center">
  

https://github.com/user-attachments/assets/381c16f0-c579-48a4-949d-2741dfe19227


</div>

## Overview SSS

The **Investment Calculator** helps users estimate the growth of their investments over time. By inputting initial investment amounts, interest rates, and investment periods, users can calculate potential returns and visualize how their investments might grow.

## Features

### Home Page

- **Overview:** Provides users with an introduction to the app and its core functionality.
- **Navigation:** Easy access to different input sections and result visualization.

### Investment Input

- **User-Friendly Form:** Allows users to input their initial investment amount, annual interest rate, and investment duration.
- **Real-Time Calculation:** Instant feedback on potential investment growth as the user inputs data.

### Results Display

- **Visual Representation:** Displays the calculated investment growth in a clear and understandable format.
- **Interactive Charts:** Graphs and charts to help users visualize how their investments will grow over time.

### Responsive Design

- **Mobile-Friendly:** The app is fully responsive and works on all screen sizes, from mobile phones to large desktop monitors.
- **Consistent UX:** Ensures a consistent user experience across all devices.

## Built With

- ![React.js](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
- ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
- ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
- ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)

## Code Explanation

### Investment Calculation Logic

The investment calculation logic is handled by the `calculateInvestmentResults` function, which simulates the growth of an investment over a specified period of time. Below is a detailed breakdown of how the function works:

```javascript
export function calculateInvestmentResults({
  initialInvestment,
  annualInvestment,
  expectedReturn,
  duration,
}) {
  const annualData = [];
  let investmentValue = initialInvestment;

  for (let i = 0; i < duration; i++) {
    const interestEarnedInYear = investmentValue * (expectedReturn / 100);
    investmentValue += interestEarnedInYear + annualInvestment;
    annualData.push({
      year: i + 1, // year identifier
      interest: interestEarnedInYear, // the amount of interest earned in this year
      valueEndOfYear: investmentValue, // investment value at end of year
      annualInvestment: annualInvestment, // investment added in this year
    });
  }

  return annualData;
}
```
- **initialInvestment**: The starting amount of money invested.
- **annualInvestment**: The additional amount invested at the end of each year.
- **expectedReturn**: The expected annual rate of return, expressed as a percentage.
- **duration**: The number of years the money is invested.

The function calculates the investment's growth year by year, accounting for both the interest earned and the additional annual investment. It returns an array of objects, each representing the investment status at the end of each year, including:

- **year**: The year of investment.
- **interest**: The amount of interest earned in that year.
- **valueEndOfYear**: The total value of the investment at the end of the year.
- **annualInvestment**: The amount added to the investment during the year.


