
import personsService from '../services/persons'


const PersonsForm = ({ persons, setPersons, newName, setNewName, newNumber, setNewNumber }) => {


    const addPerson = (e, id) => {
        e.preventDefault()


        const personObject = {
            name: newName,
            number: newNumber,
            id: persons.length * 99 + Math.floor(Math.random() * persons.length),
        }

        const existsAlready = persons.find((person) => {
            if (person && person.name) {
                return person.name.toLowerCase() === newName.toLowerCase()
            }
        });

        if (existsAlready) {
            if (confirm(`${newName} is already in the phonebook, update this contact's details?`)) {
                const changedPerson = { ...existsAlready, number: newNumber }
                personsService
                    .update(existsAlready.id, changedPerson)
                    .then(returnedPerson => {
                        setPersons(persons.map((p) => (p.id !== existsAlready.id ? p : returnedPerson)))
                        setNewNumber('')
                    })
                    .catch(err => {
                        console.log('issue updating person :', err)
                    })


            }
        }
        else {
            personsService
                .create(personObject)
                .then(() => {
                    setPersons(persons.concat(personObject))
                    setNewName('')
                    setNewNumber('')
                })
        }
    }

    const handlePersonChange = (e) => {
        setNewName(e.target.value)
    }

    const handleNumberChange = (e) => {
        setNewNumber(e.target.value)
    }

    return (
        <form onSubmit={addPerson}>
            <div>
                name: <input value={newName} onChange={handlePersonChange} />
                number: <input value={newNumber} onChange={handleNumberChange} />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>

    )
}

export default PersonsForm