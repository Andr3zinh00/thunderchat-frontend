import types from './SideEffects.types';

export const changeTheme = (theme) => ({
  type: types.CHANGE_THEME,
  payload: theme
});

export const reloadContacts = () => ({
  type: types.RELOAD_CONTACTS
});

export const connectedToWebsocket = () => ({
  type: types.CONNECTED
});

