import React, { useState } from 'react'
import personService from '../services/persons'


const PersonForm = ({ persons, setPersons, setMessage, setColor }) => {
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }

    const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
    }

    const addPerson = (event) => {
        event.preventDefault()
        if (persons.some(person => person.name === newName)) {
            const person = persons.filter(p => p.name === newName)[0]
            const id = person.id
            const changedPerson = { ...person, number: newNumber }
            if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
                personService
                    .update(id, changedPerson)
                    .then(returnedPerson => {
                        setPersons(persons.map(p => p.id !== returnedPerson.id ? p : returnedPerson))
                        setMessage(`Updated ${newName}`)
                        setColor('green')
                        setTimeout(() => {
                            setMessage(null)
                        }, 3000)
                    }
                    )
                    .catch(error => {
                        setPersons(persons.filter(p => p.id !== id))
                        setMessage(`Information of ${newName} has already been removed from server`)
                        setColor('red')
                        setTimeout(() => {
                            setMessage(null)
                        }, 3000)
                    })
            }
        } else {
            const personObject = {
                name: newName,
                number: newNumber
            }

            personService
                .create(personObject)
                .then(
                    returnedPerson =>
                        setPersons(persons.concat(returnedPerson))
                )
            setMessage(
                `Added ${newName}`
            )
            setColor('green')
            setTimeout(() => {
                setMessage(null)
            }, 3000)
        }
        setNewName('')
        setNewNumber('')
    }
    return (
        <form onSubmit={addPerson}>
            <div>
                name: <input
                    value={newName}
                    onChange={handleNameChange}
                />
            </div>
            <div>
                number: <input
                    value={newNumber}
                    onChange={handleNumberChange}
                />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default PersonForm