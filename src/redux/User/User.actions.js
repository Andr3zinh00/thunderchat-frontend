import types from './User.types'

export const createUser = (user) => ({
  type:types.CREATE_USER,
  payload:user
});

export const deleteUser = () => ({
  type:types.DELETE_USER,
});

export const createToken = (token) => ({
  type:types.CREATE_TOKEN,
  payload:token,
});