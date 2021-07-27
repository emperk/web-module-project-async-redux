import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Movies from "./components/Movies";
import { fetchMovies, getMoviesResults } from "./actions/moviesActions";

function App({
  movies=[],
  dispatch,
  error,
  isFetching
}) {
  // const [searchMovie, setSearchMovie] = useState('');
  
  // useEffect(() => {
  //   dispatch(fetchMovies())
  // }, [dispatch])

  const [searchMovie, setSearchMovie] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getMoviesResults)
  }

  return (
    <div className="App">
      <div className="Header">
        <h1>The One Wiki on the LOTR to Rule Them All</h1> 
      </div>
      {/* <Movies /> */}
      <div className="Movies">
        <h2>Easy Information on the Movie Series</h2>
        <form className="Movies-Header">
          <span>Click on the dropdown menu to select a book.</span>
          <select >
            <option>--choose one--</option>
            <option value="lotrSeries">The Lord of the Rings Series</option>
            <option value="hobbitSeries">The Hobbit Series</option>
            <option value="theUJ">The Unexpected Journey</option>
            <option value="theDOfS">The Desolation of Smaug</option>
            <option value="theBOfThe5A">The Battle of the Five Armies</option>
            <option value="the2Towers">The Two Towers</option>
            <option value="theFOfTheR">The Fellowship of the Ring</option>
            <option value="theRofTheK">The Return of the King</option>
          </select>
          <button onClick={handleSubmit}>Submit</button>
        </form>
      </div>
    </div>
  );
}

const mapStateToProps = ({ state }) => {
  return {
    movies: state.movies,
    isFetching: state.isFetching,
    error:state.error
  }
}

// export default App;
export default connect(mapStateToProps)(App);
