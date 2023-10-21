

const Persons = ({ persons, removePerson }) => {



    return (
        <li key={persons.id}>
            {persons.name}:
            {persons.number}
            <button onClick={removePerson}>DELETE</button>
        </li>
    )
}

export default Persons