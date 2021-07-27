// import React, { useState, useEffect } from "react";
// import { getMoviesResults, fetchMovies } from "../actions/moviesActions";

// const Movies = ({
//   movies=[],
//   dispatch,
//   error,
//   isFetching
// }) => {
//   const [searchMovie, setSearchMovie] = useState('');

//   function handleSubmit(e) {
//     e.preventDefault();
//     dispatch(getMoviesResults)
//   }

//   // useEffect(() => {
//   //   dispatch(fetchMovies())
//   // }, [dispatch])

//   return (
//     <div className="Movies">
//     <h2>Easy Information on the Movie Series</h2>
//     <form className="Movies-Header">
//       <span>Click on the dropdown menu to select a book.</span>
//       <select >
//         <option>--choose one--</option>
//         <option value="lotrSeries">The Lord of the Rings Series</option>
//         <option value="hobbitSeries">The Hobbit Series</option>
//         <option value="theUJ">The Unexpected Journey</option>
//         <option value="theDOfS">The Desolation of Smaug</option>
//         <option value="theBOfThe5A">The Battle of the Five Armies</option>
//         <option value="the2Towers">The Two Towers</option>
//         <option value="theFOfTheR">The Fellowship of the Ring</option>
//         <option value="theRofTheK">The Return of the King</option>
//       </select>
//       <button onClick={handleSubmit}>Submit</button>
//     </form>
//   </div>

//   )
// }

// export default Movies;