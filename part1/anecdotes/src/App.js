import React, { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]

  const [selected, setSelected] = useState(0)
  const numAnecdotes = anecdotes.length
  const [points, setPoints] = useState(new Array(numAnecdotes).fill(0))
  const [mostVoted, setMostVoted] = useState([0, 0]) // index, value

  let index = 0

  const vote = (selected) => {
    const copy = [...points]
    copy[selected] += 1
    setPoints(copy)
    if (copy[selected] > mostVoted[1]) {
      setMostVoted([selected, copy[selected]])
    }
    console.log(mostVoted)
    console.log(copy)
  }

  const getRandomSelected = () => {
    index = Math.floor(Math.random() * numAnecdotes)
    setSelected(index)
  }

  return (
    <div>
      <h1>
        Anecdote of the day
      </h1>
      <div>
        {anecdotes[selected]}
      </div>
      <div>
        has {points[selected]} votes
      </div>
      <div>
        <button onClick={() => vote(selected)}>
          vote
        </button>
        <button onClick={() => getRandomSelected(setSelected)}>
          next anecdote
        </button>
      </div>
      <h1>
        Anecdote with most votes
      </h1>
      <div>
        {anecdotes[mostVoted[0]]}
      </div>
      <div>
        has {mostVoted[1]} votes
      </div>
    </div>
  )
}

export default App