import React from 'react'
import personService from '../services/persons'


const Persons = ({ persons, setPersons }) => {
  const handleDelete = person => {
    if (window.confirm(`Delete ${person.name}?`)) {
      personService
        .remove(person.id)
      setPersons(persons.filter(current => current.id !== person.id))
    }
  }
  return (
    <div>
      {persons.map(person =>
        <div key={person.id}>
          {person.name} {person.number}
          <button onClick={() => handleDelete(person)}>delete</button>
        </div>
      )}
    </div>
  )
}

export default Persons