const Persons = ({ persons }) => {
    return (
        <li key={persons.id}>{persons.name}  {persons.number}</li>
    )
}

export default Persons