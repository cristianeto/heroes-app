import React, { useMemo } from "react";
import queryString from "query-string";

import HeroCard from "../heroes/HeroCard";
import { useForm } from "../../hooks/useForm";
import { useLocation } from "react-router";
import { getHeroesByName } from "../../selectors/getHeroesByName";

const SearchScreen = ({ history }) => {
  const location = useLocation();
  const { query = "" } = queryString.parse(location.search);

  const [formValues, handleInputChange] = useForm({ searchText: query });

  const { searchText } = formValues;

  const heroesFiltered = useMemo(() => getHeroesByName(query), [query]);
  // const heroesFiltered = getHeroesByName(searchText);

  const handleSearch = (e) => {
    e.preventDefault();
    history.push(`?query=${searchText}`);
  };
  return (
    <div>
      <h1>Search Screen</h1>
      <div className="row">
        <div className="col-5">
          <h4>Search Form</h4>
          <hr />
          <form onSubmit={handleSearch}>
            <input
              autoComplete="off"
              className="form-control"
              name="searchText"
              placeholder="Find your hero"
              type="text"
              value={searchText}
              onChange={handleInputChange}
            />
            <button className="btn m-1 btn-block btn-outline-primary">
              Search
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />
          {query === "" && (
            <div className="alert alert-info">Search a hero</div>
          )}
          {query !== "" && heroesFiltered.length === 0 && (
            <div className="alert alert-danger">
              There is no a hero with: {query}
            </div>
          )}
          {heroesFiltered.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchScreen;
