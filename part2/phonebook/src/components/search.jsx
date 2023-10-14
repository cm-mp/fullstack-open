import { useState } from "react"

const Search = ({ persons }) => {
    const [query, setQueryValue] = useState("")

    const namesToFilter = persons.map((p) => p.name)
    return (
        <div>
            <h4>Search by name</h4>
            <input
                type='text'
                name='search'
                value={query}
                onChange={(e) => setQueryValue(e.target.value)}
            />
            <div>
                <ul>
                    {query === ""
                        ? ""
                        : namesToFilter
                            .filter((name) => name.toLowerCase().match(query.toLowerCase()))
                            .map((name) => {
                                return <li >{name}</li>
                            })}
                </ul>
            </div>
        </div>
    )
}

export default Search