


const Search = ({ countries, query, setQuery, setCountriesToDisplay }) => {



    const handleQueryChange = (e) => {
        const search = e.target.value
        setQuery(search)
        setCountriesToDisplay(
            countries.filter((c) =>
                c.name.common.toLowerCase().includes(search.toLowerCase()))
        )
    }

    return (
        <div>
            <h3>Search for a country</h3>
            <input value={query} onChange={handleQueryChange} />

        </div>
    )
}

export default Search