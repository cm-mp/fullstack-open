import { useState } from 'react'
import './App.css'



const AnecdoteButton = (props) => {
  return (
    <button onClick={props.handleClick}>New random anecdote</button>
  )
}

const VoteButton = (props) => {
  return (
    <button onClick={props.handleClick}>Vote for this anecdote</button>
  )
}

const AnecdoteToRender = ({ anecdote, selected }) => {
  return (
    <h2>{anecdote[selected]}</h2>
  )
}

const VoteTally = ({ votes }) => {
  return (
    <h3>This anecdote has {votes} votes</h3>
  )
}

const MostVoted = ({ topAnecdote, mostVoted }) => {
  return (
    <div>
      <h2>Anecdote with the most votes with {mostVoted} points</h2>
      <hr />
      <span>{topAnecdote}</span>

    </div>
  )
}


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

  const randomAnecdote = () => {
    const randomNumber = Math.floor(Math.random() * Math.floor(anecdotes.length))
    setSelected(randomNumber)
  }

  const voteForAnecdote = () => {
    const tallyTotal = [...votes]
    tallyTotal[selected] += 1
    setVotes(tallyTotal)
    console.log(votes)
  }

  const mostVoted = Math.max(...votes)
  const topAnecdote = anecdotes[votes.indexOf(mostVoted)]


  return (
    <div>
      <AnecdoteToRender anecdote={anecdotes} selected={selected} />
      <VoteTally votes={votes[selected]} />
      <AnecdoteButton handleClick={() => randomAnecdote()} />
      <VoteButton handleClick={() => voteForAnecdote()} />
      <MostVoted topAnecdote={topAnecdote} mostVoted={mostVoted} />
    </div>

  )
}
export default App
