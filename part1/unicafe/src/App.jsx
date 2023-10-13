import { useState } from 'react'


const Header = () => <h1>Give feedback </h1>

const Button = (props) => {

  return (
    <button onClick={props.handleClick}>{props.text}</button>
  )
}
const StatisticsLine = (props) => {
  return (
    <>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </>
  )
}

const Statistics = (props) => {

  var totalFeeback = props.good + props.neutral + props.bad;
  var feedbackPercentage = (Math.floor((props.good / totalFeeback) * 100));
  var feedbackAverage = ((props.good - (props.neutral + props.bad) / totalFeeback) / 10)

  if (totalFeeback > 0) {
    return (
      <div>
        <h2>Statistics</h2>
        <div>
          <table>
            <tbody>
              <tr>
                <StatisticsLine text="Good :" value={props.good} />
              </tr>
              <tr>
                <StatisticsLine text="Bad :" value={props.bad} />
              </tr>
              <tr>
                <StatisticsLine text="Neutral :" value={props.neutral} />
              </tr>
              <tr>
                <td>All :</td><td>{totalFeeback}</td>
              </tr>
              <tr>
                <td>Average :</td><td>{feedbackAverage}</td>
              </tr>
              <tr>
                <td>Positive :</td><td>{feedbackPercentage}%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  } else {
    return (
      <div>
        No feedback yet
      </div>
    )
  }
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGood = () => setGood(good + 1)
  const increaseBad = () => setBad(bad + 1)
  const increaseNeutral = () => setNeutral(neutral + 1)

  return (
    <div>
      <Header />
      <Button handleClick={increaseGood} text="good" />
      <Button handleClick={increaseNeutral} text="neutral" />
      <Button handleClick={increaseBad} text="bad" />
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  )
}

export default App
