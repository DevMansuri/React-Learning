import React from 'react'
import Person from './Person'

function NameList() {
    const Persons = [
        {
            id:1,
            name:"Nadim"
        },
        {
            id:2,
            name:"Sonu"
        },
        {
            id:3,
            name:"Monu"
        }
    ]
    const personList = Persons.map(person => <Person person={person}> </Person>)
  return (
    <div>{personList}</div>
  )
}
export default NameList