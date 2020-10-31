import types from './User.types'

export const createUser = (user) => ({
  type: types.CREATE_USER,
  payload: user
});

export const signOut = () => ({
  type: types.SIGN_OUT,
});

export const deleteUser = () => ({
  type: types.DELETE_USER,
});

export const createToken = (token) => ({
  type: types.CREATE_TOKEN,
  payload: token,
});

export const onNotification = (notification, _id) => ({
  type: types.ON_NOTIFICATIONS,
  payload: {notification, _id}
});
export const removeNotification = (idMenssage) => ({
  type: types.REMOVE_NOTIFICATIONS,
  payload: idMenssage
});