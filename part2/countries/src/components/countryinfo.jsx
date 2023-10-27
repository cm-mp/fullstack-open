const CountryInfo = ({ countriesToDisplay }) => {
    if (countriesToDisplay.length === 1)

        return countriesToDisplay.map((c) => (
            <div>
                <h3>{c.name.common}</h3>
                <img src={c.flags.png} height={100} width={150} />
                <p>Capital: {c.capital}</p>
                <p>Area: {c.area}</p>
                <h3>Languages spoken in {c.name.common}:</h3>
                <ul>
                    {Object.values(c.languages).map((l) => (
                        <li key={l}>{l}</li>
                    ))}
                </ul>
            </div>
        ))
}

export default CountryInfo