import axios from "axios";

export const FETCH_START_MOVIES = "FETCH_START_MOVIES";
export const FETCH_SUCCESS_MOVIES = "FETCH_SUCCESS_MOVIES";
export const FETCH_FAIL_MOVIES = "FETCH_FAIL_MOVIES";


const getAuthorizedUrl = url => ({
  method: 'GET',
  headers: {
    'Accept': 'application/json',
    'Authorization': 'Bearer hXdn3rlTjzwTaHW3GEaU'
  },
  url
})

export const getMoviesResults = () => {
  return (dispatch) => {
    dispatch(fetchStart());
    const url = `https://the-one-api.dev/v2/movie`;

    axios
      .request(getAuthorizedUrl(url))
      .then(function(response) {
        dispatch(fetchSuccess(response.data))
        console.log(response.data)
      })
      .catch(function(error) {
        fetchFail(error)
        console.log(error)
      })
  }
}

export const fetchStart = () => {
  return ({ type: FETCH_START_MOVIES });
}

export const fetchSuccess = (movies) => {
  return ({ type: FETCH_SUCCESS_MOVIES, payload:movies })
}

export const fetchFail = (error) => {
  return ({ type: FETCH_FAIL_MOVIES, payload:error })
}



