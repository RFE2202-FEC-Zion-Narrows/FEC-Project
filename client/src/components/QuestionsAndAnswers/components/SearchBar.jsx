import React, { useState } from 'react';
import "./QuestionAndAnswers.css";



const SearchBar = ({ handleSearch, setSearchTerm, searchTerm }) => {


  const onChange = (e) => {
    setSearchTerm(e.target.value);
    handleSearch(e.target.value);
  }

  return (

      <div className = 'searchBarWrapper'>
        <i className="fa fa-search QAicon" data-testid="searchIcon"></i>
        <input className = 'QAsearch' type='text' placeholder='HAVE A QUESTION? SEARCH FOR ANSWERS...'
        onChange = {onChange} value = {searchTerm} />
      </div>

  )

}

export default SearchBar;


