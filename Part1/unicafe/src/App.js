import { useState } from 'react'



const Button = (props) => {
  return (
    <button onClick={props.handleClick}>{props.text}</button>
  )
}
const StatisticLine = ({text, value}) => {
  return (
    <div>
    <p>{text}: <strong> {value}</strong></p>
    </div>
    
  )
}

const Statistics = ({ average, positive, good, neutral, bad}) => {
  console.log(good,bad,neutral);
  if (good === 0 & neutral === 0 & bad === 0){
    return(
      <p><strong>No Feedback given </strong></p>
    )
  }
  return (
    <div>
    <hr></hr>
    <StatisticLine text="Good" value ={good} />
    <StatisticLine text="Neutral" value ={neutral} />
    <StatisticLine text="Bad" value ={bad} />
    <hr></hr>
    <StatisticLine text="Average" value ={average}/>
    <StatisticLine text="Positive" value ={positive} />
    </div>
   
   
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
      <p>Total Number of Feedback:<strong>{allClicks.length}</strong></p>
      <Statistics average={average} positive={positive} good={good} neutral={neutral} bad={bad}/> 
     

     

      
      
    </div>
  )
}

export default App