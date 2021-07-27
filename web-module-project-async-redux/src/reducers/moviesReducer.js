import { FETCH_START_MOVIES, FETCH_SUCCESS_MOVIES, FETCH_FAIL_MOVIES } from "../actions/moviesActions"

export const moviesInitialState = {
  movies: [],
  isLoading: false,
  errorMessage: '',
}

const reducer = (state = moviesInitialState, action) => {
  switch(action.type) {
    case(FETCH_START_MOVIES):
      return ({
        ...state,
        isLoading: true
      })
    case(FETCH_SUCCESS_MOVIES):
      return ({
        ...state,
        isLoading: false,
        movies: action.payload
      })
    case(FETCH_FAIL_MOVIES):
      return ({
        ...state,
        isLoading: false,
        errorMessage: action.payload
      })
    default:
      return state;
  }
}

export default reducer;