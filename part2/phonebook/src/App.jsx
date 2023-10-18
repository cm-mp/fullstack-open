import { useState, useEffect } from 'react'
import Persons from './components/persons'
import Search from './components/search'
import PersonsForm from './components/personsform'
import axios from 'axios'



const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(res => {
        setPersons(res.data)
      })
  }, [])

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        <Search persons={persons} />
      </div>
      <hr />
      <div>
        <PersonsForm
          persons={persons}
          setPersons={setPersons}
          newName={newName}
          setNewName={setNewName}
          newNumber={newNumber}
          setNewNumber={setNewNumber}
        />
      </div>
      <h2>Numbers</h2>
      <ul>
        {persons.map(persons =>
          <Persons persons={persons} />
        )}
      </ul>
    </div>
  )
}

export default App