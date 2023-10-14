import { useState } from 'react'
import Persons from './components/persons'
import Search from './components/search'
import PersonsForm from './components/personsform'


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState()

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