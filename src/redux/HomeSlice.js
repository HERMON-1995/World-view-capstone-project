import { createReducer, createAsyncThunk } from '@reduxjs/toolkit';
import BaseURL from './CountryApi';

const FETCH_COUNTRIES = 'FETCH_COUNTRIES';
const INITIAL_STATE = [];
export const fetchCountries = async () => {
  const data = await (await fetch(BaseURL)).json();
  return data;
};

export const retrieveCountries = createAsyncThunk(FETCH_COUNTRIES,
  async (obj, thunkAPI) => {
    const currentState = thunkAPI.getState();
    if (currentState.countriesReducer.length === 0) {
      const response = await fetchCountries();
      const countriesData = [];
      response.forEach((country) => {
        const aCountry = {
          id: country.alpha3Code,
          name: country.name,
          population: country.population,
          flag: country.flag,
          capital: country.capital,
          region: country.region,
          subregion: country.subregion,
          area: country.area,
          timezones: country.timezones[0],
          callingcode: country.callingCodes[0],
          alphacode: country.alpha3Code,
        };
        countriesData.push(aCountry);
      });
      return countriesData;
    }
    return currentState.countriesReducer;
  });

const countries = createReducer(INITIAL_STATE, ((builder) => {
  builder
    .addCase(retrieveCountries.fulfilled, ((state, action) => action.payload))
    .addDefaultCase(((state) => [...state]));
}));

export default countries;
