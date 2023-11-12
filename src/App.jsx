import { useState } from 'react'

import './App.css'

function App() {

  let [counter, setCounter] = useState(10);

  const increaseValue = () => {
      setCounter(counter + 1);
  }

  const decreaseValue = () => {
    setCounter(counter - 1);
  }

  return (
    <>
      <h1>Count Value : {counter}</h1>

      <button
      id='increaseValue'
      onClick={increaseValue}
      >Increase</button> &nbsp;

      <button 
      onClick={decreaseValue}
      >Decrease</button>
    </>
  )
}

export default App
