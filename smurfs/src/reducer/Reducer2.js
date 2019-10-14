import { ADD_TODO, START_POSTING, POST_FAILURE } from "../actions/indexAgain";

export const initialState = {
    // newsmurf: [
        // {
            name: "",
            age: "",
            height: "",
            isPosting: false,
            error: ""
        // },
    // ],  
};


export const reducer = (state = initialState, action) => {

    switch(action.type) {
        case START_POSTING:
            return {
                ...state,
                isPosting: true,
                error: ""
            }
        case ADD_TODO:
            return {
                ...state,
                name: "",
                age: "",
                height: "",
                isPosting: false,
                error: "",
                smurf: action.payload,
            };
        case POST_FAILURE:
            return {
                ...state,
                error: action.payload,
                isPosting: false,
            }
            default:
                return state;
    }
};