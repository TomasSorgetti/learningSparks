import {
  GET_USERS,
  GET_USER_BY_EMAIL,
  GET_USERS_ORDERED,
  SEARCH_POSTS,
  GET_SUBJECTS,
} from "../actions/actionTypes";

const initialState = {
  users: [],
  posts: [],
  subjects: [],

};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return { ...state, users: action.payload };
    case GET_USER_BY_EMAIL:
      return { ...state, users: action.payload };
    case GET_USERS_ORDERED:
      return { ...state, users: action.payload };
    case SEARCH_POSTS:
      return { ...state, posts: action.payload };
    case GET_SUBJECTS:
      return { ...state, subjects: action.payload };
    default:
      return { ...state };
  }
};
export default rootReducer;
