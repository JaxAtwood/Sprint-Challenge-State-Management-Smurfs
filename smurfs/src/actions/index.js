import axios from "axios";

export const START_FETCHING = "START_FETCHING";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";
// export const ADD_TODO = "ADD_TODO";
// export const ADD_AGE = "ADD_AGE";
// export const ADD_HEIGHT = "ADD_HEIGHT";

export const fetchSmurf = () => dispatch => {
    dispatch({ type: START_FETCHING });
    axios
        .get("http://localhost:3333/smurfs")
        .then(res => {
            // console.log("ACTION GET", res)
            dispatch({ type: FETCH_SUCCESS, payload: res.data })
        })
        // .then(res => console.log("index", res))
        .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.response }))
};
