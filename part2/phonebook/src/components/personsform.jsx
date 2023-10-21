import personsService from '../services/persons'


const PersonsForm = ({ persons, setPersons, newName, setNewName, newNumber, setNewNumber }) => {


    const addPerson = (e) => {
        e.preventDefault()

        const personObject = {
            name: newName,
            number: newNumber,
            id: persons.length * 99 + Math.floor(Math.random() * persons.length),
        }

        const existsAlready = persons.find((person) => person.name.toLowerCase() === newName.toLowerCase())


        if (existsAlready) {
            confirm(`${newName} is already in the phonebook`)
        }
        else {
            personsService
                .create(personObject)
                .then(() => {
                    setPersons(persons.concat(personObject))
                    setNewName('')
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