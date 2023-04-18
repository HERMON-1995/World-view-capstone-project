import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Country from '../components/Country';
import { retrieveCountries } from '../redux/HomeSlice';
import rotatingglobe from '../images/rotatingglobe.gif';

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(retrieveCountries());
  }, [dispatch]);
  const countries = useSelector((state) => state.countriesReducer);

  const [search, setSearch] = React.useState('');

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const renderCountries = countries.filter(
    (country) => country.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <>
      <div className="search-holder">
        <input type="text" className="search-bar" placeholder="Search by name" onChange={handleChange} />
      </div>
      <div className="heading-content">
        <img
          src={rotatingglobe}
          alt="Rotating Globe"
          className="world-image"
        />
        <h2>
          Number of Countries:
          {' '}
          <br />
          <span className="countries-num">235</span>
        </h2>
        <div className="stat-divide">
          <p>Stats by population</p>
        </div>
      </div>
      <div className="contents">
        {renderCountries.map((country) => (
          <Link
            className="details-link"
            to={{
              pathname: `/country/${country.name}`,
              state: { stateParam: true },
            }}
            key={country.id}
          >
            <Country
              key={country.id}
              id={country.id}
              name={country.name}
              population={country.population}
              flag={country.flag}
              capital={country.capital}
              region={country.region}
              subregion={country.subregion}
              area={country.area}
              timezones={country.timezones}
              callingcode={country.callingcode}
              alphacode={country.alphacode}
            />
          </Link>
        ))}
      </div>
    </>
  );
}

export default Home;
