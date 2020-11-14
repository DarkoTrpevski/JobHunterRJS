import React from "react";
import './Search.scss';


const Search = ({ desc, setDesc, loc, setLoc, full, setFull, handleSubmit, handleClear }) => {

  const isQueryPresent = () => {
    return desc || loc || full;
  };

  return (
    <div className = "Search">
      <div className="sm-container">
        <form className = "search-form" onSubmit={handleSubmit}>
          <div className="form-top-row">
            <div className="top-row-text-inputs">
              <input className = "search-input" type="text" onChange = {(e) => setDesc(e.target.value)} value = {desc} placeholder = "eg. React Developer" name = "description" />
              <input className = "search-input" type="text" onChange = {(e) => setLoc(e.target.value)} value = {loc} placeholder = "eg. San Francisco" name = "location" />
              <div className="form-fulltime">
                <input type = "checkbox" onChange={(e) => setFull(!full)} checked={full}/>
                <label>Full Time</label>
              </div>
            </div>
          </div>
          <div className="form-bottom-row">
            <button type="submit">Search</button>
            <button onClick={handleClear} className = {!isQueryPresent() ? 'disabled' : ''} disabled={!isQueryPresent()}>Clear</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Search;