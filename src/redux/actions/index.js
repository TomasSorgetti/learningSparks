import axios from "axios"
import {
  GET_USERS,
  GET_USER_BY_EMAIL,
  GET_USERS_ORDERED,
  SEARCH_POSTS,
  GET_SUBJECTS,
} from "./actionTypes";

const URL_BASE = "http://localhost:3001";

//********* Get All Users ***********/
export const getAllUsers = (token) => {
  const URL = `${URL_BASE}/user/allusers`;
  return async (dispatch) => {
    await axios
      .get(URL, {
        headers: {
          authorization: `${token}`,
        },
      })
      .then((response) => {
        dispatch({
          type: GET_USERS,
          payload: response.data.response,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

//********* Get User By Email ***********/
export const searchUserByEmail = (partialEmail, token) => {
  const URL = `${URL_BASE}/users/userByEmail`;
  return async (dispatch) => {
    await axios
      .get(URL, partialEmail, {
        headers: {
          authorization: `${token}`,
        },
      })
      .then((response) => {
        dispatch({
          type: GET_USER_BY_EMAIL,
          payload: response.data.response,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

//********* Get Users Ordered ***********/
export const getUsersOrdered = (prop,direction, token) => {
    const URL = `${URL_BASE}/users/usersOrdered`;
  return async (dispatch) => {
    await axios
      .get(
        URL,
        { prop, direction },
        {
          headers: {
            authorization: `${token}`,
          },
        }
      )
      .then((response) => {
        dispatch({
          type: GET_USERS_ORDERED,
          payload: response.data.response,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};



export const searchPosts = (partialTitle, subject) => {
  const URL = `${URL_BASE}/posts?partialTitle=${partialTitle}&subj=${subject}`;
  return async (dispatch) => {
    await axios
      .get(URL)
      .then((response) => {
        dispatch({
          type: SEARCH_POSTS,
          payload: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const searchSubjects = () => {
  const URL = `${URL_BASE}/subjects`;
  return async (dispatch) => {
    await axios
      .get(URL)
      .then((response) => {
        dispatch({
          type: GET_SUBJECTS,
          payload: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};