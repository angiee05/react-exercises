import React, { useMemo } from 'react'


export default function FilteredList(props) {
    const persons = [
        {name: props.name1, id: props.id1, age: props.age1},
        {name: props.name2, id: props.id2, age: props.age2},
        {name: props.name3, id: props.id3, age: props.age3}
    ]
    
    const personsFiltered = useMemo(() => persons.filter((person) => person.age > 18 ), [])

    return (
        <ul>{personsFiltered.map((person, i) => <div key={i}><p>name: {person.name}, age: {person.age}, id: {person.id}</p> </div>)}</ul>
    )
}
