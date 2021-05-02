import React, { useState } from 'react'


const get_callback = (state, setState) => () => {
  setState(state + 1)
}

const Button = ({ good, setGood, neutral, setNeutral, bad, setBad }) => {
  return (
    <div>
      <button onClick={get_callback(good, setGood)}>
        good
      </button>
      <button onClick={get_callback(neutral, setNeutral)}>
        neutral
      </button>
      <button onClick={get_callback(bad, setBad)}>
        bad
      </button>
    </div>
  )
}

const Statistic = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  if (good === 0 && neutral === 0 && bad === 0) {
    return (
      <div>
        <p>
          No feedback given
        </p>
      </div>
    )
  }
  else {
    let all = good + neutral + bad
    let average = (good - bad) / all
    let positive = (good / all) * 100 + '%'
    return (
      <div>
        <table>
          <tbody>
            < Statistic text='good' value={good} />
            < Statistic text='neutral' value={neutral} />
            < Statistic text='bad' value={bad} />
            < Statistic text='all' value={all} />
            < Statistic text='average' value={average} />
            < Statistic text='positive' value={positive} />
          </tbody>
        </table>
      </div>
    )
  }
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>
        give feedback
      </h1>
      < Button good={good} setGood={setGood} neutral={neutral} setNeutral={setNeutral} bad={bad} setBad={setBad} />
      <h1>
        statistics
      </h1>
      < Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App