import { React, useState } from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import Results from "./components/Results";
function App() {
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
        [inputIdentifier]: +value, //adding a + will force a conversion from a string value to a number value
      };
    });
  }
  const inputIsValid = userInput.duration >= 1;
  return (
    <>
      <Header />
      <Input userInput={userInput} onChange={handleChange} />
      {!inputIsValid && (
        <p className='center'>Please enter a duration greater than 0</p>
      )}
      {inputIsValid && <Results userInput={userInput} />}
    </>
  );
}

export default App;
