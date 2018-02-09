import * as APIUtil from '../util/user_api_util';


export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";
export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS";

const receiveUser = user => {
  return {
    type: RECEIVE_USER,
    user
  };
};

const receiveAllUsers = users => {
  return {
    type: RECEIVE_ALL_USERS,
    users
  };
};

const receiveErrors = (errors) => {
  return {
  type:RECEIVE_USER_ERRORS,
  errors
};
};


export const fetchUser = userId => dispatch => {
  APIUtil.fetchUser(userId).then((user) => dispatch(receiveUser(user))),error => (
    dispatch(receiveErrors(error.responseJSON))
  );
};

export const updateUser = (id, userInfo) => dispatch => {

  return APIUtil.updateUser(id, userInfo)
    .then(user => {
      dispatch(receiveUser(user));
    }, error => {
      dispatch(receiveErrors(error.responseJSON));
    });
};

export const fetchAllUsers = () => dispatch => {
  return APIUtil.fetchAllUsers()
    .then(users => {
      dispatch(receiveAllUsers(users));
    }, error => {
      dispatch(receiveErrors(error.responseJSON));
    });
};
