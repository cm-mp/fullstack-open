

const PersonsForm = ({ persons, setPersons, newName, setNewName, newNumber, setNewNumber }) => {

    const addPerson = (e) => {
        e.preventDefault()
        const personObject = {
            name: newName,
            number: newNumber
        }

        const existsAlready = persons.find((person) => person.name.toLowerCase() === newName.toLowerCase())


        if (existsAlready) {
            alert(`${newName} is already in the phonebook`)
        }
        else {
            setPersons(persons.concat(personObject))
            setNewName('')
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