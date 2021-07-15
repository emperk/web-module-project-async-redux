import React, { useState } from "react";
import { connect } from "react-redux";
import { getWordResults } from "./actions";

function App({
  dispatch, 
  searches = [],
  error,
  isFetching
}) {

  const [searchTerm, setSearchTerm] = useState('')
  const [type, setType] = useState('')

  if (error) {
    return <h2>An error: {error}</h2>
  }

  if (isFetching) {
    return (
      <h2>Fetching Results...</h2>
    )
  }

  return (
    <div className="App">
      <div className="Header">
        <h1>Dictionary</h1> 
      </div>
      <form>
        <span>Type Word Here:</span>
        <input />
        
      </form>
    </div>
  );
}

export default App;
