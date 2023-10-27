const CountryList = ({ countriesToDisplay, setCountriesToDisplay, setQuery }) => {

    const handleClick = (c) => {
        setCountriesToDisplay([c])
        setQuery("")
    }

    return (
        <ul style={{ listStyleType: "none" }}>

            {countriesToDisplay.slice(0, 10).map(c => (
                <li key={c.tld[0]}>{c.name.common} <button onClick={() => handleClick(c)} >Details</button></li>
            ))
            }

        </ul >
    )
}

export default CountryList