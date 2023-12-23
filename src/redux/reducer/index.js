import {
  GET_USERS,
  GET_USER_BY_EMAIL,
  GET_USERS_ORDERED,
  GET_POSTS,
} from "../actions/actionTypes";

const initialState = {
  users: [],
  posts: [],

};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return { ...state, users: action.payload };
    case GET_USER_BY_EMAIL:
      return { ...state, users: action.payload };
    case GET_USERS_ORDERED:
      return { ...state, users: action.payload };
    case GET_POSTS:
      return { ...state, posts: action.payload };
    default:
      return { ...state };
  }
};
export default rootReducer;
