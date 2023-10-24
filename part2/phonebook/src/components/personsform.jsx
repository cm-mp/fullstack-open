import { useState } from 'react'
import personsService from '../services/persons'
import Notification from './notification'

const PersonsForm = ({ persons, setPersons, newName, setNewName, newNumber, setNewNumber }) => {

    const notifValues = {
        message: '',
        display: false
    }
    const [successMessage, setSuccessMessage] = useState(notifValues)
    const [errorMessage, setErrorMessage] = useState(notifValues)

    const addPerson = (e) => {
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
                        setSuccessMessage({ message: `Successfully changed details of ${newName}`, display: true })
                        setTimeout(() => {
                            setSuccessMessage({ message: '', display: false })
                        }, 5000)
                    })
                    .catch(err => {
                        console.log('issue updating person :', err)
                        setErrorMessage({ message: `Error changing contact details of ${newName}`, display: true })
                        setTimeout(() => {
                            setErrorMessage({ message: '', display: false })
                        }, 5000)
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
                <Notification errorMessage={errorMessage} successMessage={successMessage} />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>

    )
}

export default PersonsForm