import { useState } from 'react'



const Button = (props) => {
  return (
    <button onClick={props.handleClick}>{props.text}</button>
  )
}

const DisplayFeedback = ({text, clicksNumber}) => {
  return (
    <p>{text} was clicked:<strong> {clicksNumber} </strong> times</p>
  )
}

const MoreStatistics = ({text, feedbackType}) => {
  return (
    <p>Feedback {text}:  <strong>{feedbackType}</strong></p>
   
  )
}



const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState([])

  const handleGoodClick = () => {
    setGood(good + 1)
    setAll(allClicks.concat('G'))
  }
  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
    setAll(allClicks.concat('N'))
  }
  const handleBadClick = () => {
    setBad(bad + 1)
    setAll(allClicks.concat('B'))
  }

  const average = ((good-bad) / allClicks.length)
  const positive = (good / allClicks.length) * 100


  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={handleGoodClick} text= "Good"/>
      <Button handleClick={handleNeutralClick} text= "Neutral"/>
      <Button handleClick={handleBadClick} text= "Bad"/> 


      <h1>Statistics</h1> 
      <DisplayFeedback clicksNumber={good} text= "Good"/> 
      <DisplayFeedback clicksNumber={neutral} text= "Neutral"/> 
      <DisplayFeedback clicksNumber={bad} text= "Bad"/> 
      
      <p>Total Number of Feedback:<strong>{allClicks.length}</strong></p>
      <MoreStatistics  text = "Average" feedbackType={average} /> 
      <MoreStatistics  text = "Positive" feedbackType={positive} /> 
     
     
      
      
    </div>
  )
}

export default App