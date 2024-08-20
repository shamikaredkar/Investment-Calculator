import { React, useState } from "react";
import Header from "./components/hEADER.JSX";
import Input from "./components/Input";
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
        [inputIdentifier]: value,
      };
    });
  }
  return (
    <>
      <Header />
      <Input userInput={userInput} onChange={handleChange} />
    </>
  );
}

export default App;
