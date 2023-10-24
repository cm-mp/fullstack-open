import { useState, useEffect } from 'react'
import Persons from './components/persons'
import Search from './components/search'
import PersonsForm from './components/personsform'
import personsService from './services/persons'



const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')


  useEffect(() => {
    personsService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const removePerson = (id) => {

    const personToDelete = persons.find((p) => p.id === id)
    console.log(personToDelete)
    if (window.confirm(`Really delete ${personToDelete.name} from the phonebook?`)) {
      personsService.remove(id).then(() => {
        personsService.getAll().then((res) => {
          setPersons(res)
        })
          .catch(err => {
            alert(`${personToDelete} was already removed from the phonebook`)
          })
      })
    } else {

    }
  }



  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        <Search
          persons={persons}
        />
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
      <div>
        <ul>
          {persons.map(persons =>
            <Persons
              persons={persons}
              removePerson={() => removePerson(persons.id)}
            />
          )}
        </ul>
      </div>
    </div>
  )
}

export default App