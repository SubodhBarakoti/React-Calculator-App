import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput/UserInput.jsx";
import Result from "./components/Result/Result.jsx";

import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });

  const durationIsvalid =  userInput.duration >=1;
  
  function handleInvestmentValueChanges(ValueChanged, value){
    setUserInput((previousValue)=>{
      return{
        ...previousValue, 
        [ValueChanged] : +value
      }
    })
  }

  return (
    <>
      <Header>React Investment Calculator</Header>
      <main>
        <UserInput investmentValues = {userInput} handleChange = {handleInvestmentValueChanges} />
        {
          durationIsvalid 
          ?
          <Result value={userInput}/>
          :
          <p className="center">Please enter valid duration.</p>
        }
      </main>
    </>
  )
}

export default App
