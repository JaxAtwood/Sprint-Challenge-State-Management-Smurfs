import axios from "axios";

export const ADD_TODO = "ADD_TODO";
export const START_POSTING = "START_POSTING";
export const POST_FAILURE = "POST_FAILURE";

export const postSmurf = () => dispatch => {
    dispatch({ type: START_POSTING });
    // console.log(postSmurf);

    axios
        .post("/smurfs")
        .then(res => {
            console.log("ACTION POST", res)
            dispatch({ type: ADD_TODO, payload: res.data })
        })
        .catch(err => dispatch({ type: POST_FAILURE, payload: err.response }))
};