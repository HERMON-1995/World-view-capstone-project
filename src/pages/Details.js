import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const Details = () => {
  const params = useParams();
  const countries = useSelector((state) => state.countriesReducer);
  const item = countries.find((coun) => coun.name === params.countryName);
  useEffect(() => window.scrollTo(0, 0), []);
  return (
    <>
      <div className="heading-content">
        <img
          src={item.flag}
          alt={`Flag of ${item.name}`}
          className="world-image"
        />
        <h2>
          Name of Country:
          {' '}
          <br />
          <span className="countries-num">{item.name}</span>
        </h2>
      </div>
      <div className="ar-characters">
        <table>
          <caption>Country&apos;s Stats</caption>
          <tbody>
            <tr>
              <p>Capital City</p>
              <span>{item.capital}</span>
            </tr>
            <tr>
              <p>Population</p>
              <span>{item.population}</span>
            </tr>
            <tr>
              <p>Region</p>
              <span>{item.region}</span>
            </tr>
            <tr>
              <p>Sub-region</p>
              <span>
                {item.subregion}
              </span>
            </tr>
            <tr>
              <p>Area</p>
              <span>{item.area}</span>
            </tr>
            <tr>
              <p>Timezone</p>
              <span>{item.timezones}</span>
            </tr>
            <tr>
              <p>Calling Code</p>
              <span>{item.callingcode}</span>
            </tr>
            <tr>
              <p>Alpha Code</p>
              <span>{item.alphacode}</span>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Details;
