import React, { useState, useEffect } from "react";
import TextInput from "./TextInput";
import SelectInput from "./SelectInput";
import { Redirect, withRouter } from "react-router";
import PropTypes from "prop-types";

import "./SearchForm.css"

const searchOptions = [
  {id: 1, name: "Model"},
  {id: 2, name: "Brand"},
]

function SearchForm(props){
  const [searchText, setSearchText] = useState("");
  const [searchType, setSearchType] = useState(searchOptions[0]);
  // const [execureSearch, setExecuteSearch] = useState(false);

  // useEffect(() => {
  //  execureSearch && setExecuteSearch(false);
  // });

  function handleTextInputChange(event) {
    const { value } = event.target;
    setSearchText(value);
  }

  function handleSearchtypeInputChange(event) {
    const { value } = event.target;
    setSearchType(searchOptions.find(option => option.id == value));
  }

  function handleSearch(event) {
    event.preventDefault();
    //setExecuteSearch(true);
    props.history.push('/search?query=' + searchText + '&type=' + searchType.name);
  }

  return (
    <>
      {/* {execureSearch && <Redirect to={"/search/" + getSearchQuery()}/>} */}
      <form onSubmit={handleSearch} className="row">
        <TextInput
          name="search"
          label="Search"
          value={searchText}
          onChange={handleTextInputChange}
        />
        <SelectInput
          name="searchType"
          label="Search By:"
          value={searchType.id}
          defaultOption="Select Search Type"
          options={searchOptions.map(option => ({
            value: option.id,
            text: option.name
          }))}
          onChange={handleSearchtypeInputChange}
        />
        <button type="submit" className="btn btn-primary">
          Search
        </button>
      </form>
    </>
  );
}

SearchForm.propTypes = {
    history: PropTypes.object.isRequired
}

export default withRouter(SearchForm);
