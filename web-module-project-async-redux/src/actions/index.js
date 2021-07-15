import axios from "axios";

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";

const getOptions = url => ({
  method: 'GET',
  headers: {
    'x-rapidapi-key': process.env.REACT_APP_DICTIONARY_API_KEY,
  },
  url
});

export const getWordResults = (searchTerm, type) => {
  return (dispatch) => {
    // 1. Fetch_Start
    dispatch(fetchStart());

    // 2. Fetch data from api
    const url = `https://www.dictionaryapi.com/api/v3/references/thesaurus/json/${searchTerm}?key=${type}`
  
    axios.request(getOptions(url))
    .then(function(response) {
      console.log(response.data);
      const payload = {
        word: response.data.word,
        results: response.data[type],
        type,
      }
      dispatch(fetchSuccess(payload))
    }).catch(function (error) {
      fetchFail(error)
      console.log("an error:", error);
    });
  }
}

export const fetchStart = () => {
  return ({ type: FETCH_START });
}

export const fetchSuccess = (searches) => {
  return ({ type: FETCH_SUCCESS, payload:searches })
}

export const fetchFail = (error) => {
  return ({ type: FETCH_FAIL, payload:error })
}


