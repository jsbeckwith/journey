import {
    GET_POSTS,
    NEW_POST
} from "../actions/types";

const initialState = {
    posts: [],
    post: {},
    id: {}
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_POSTS:
            return {
                ...state,
                posts: action.payload
            };
        case NEW_POST:
            return {
                ...state,
                post: action.payload
            };
        default:
            return state;
    }
}