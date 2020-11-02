import types from './SideEffects.types';

export const reloadContacts = () => ({
  type: types.RELOAD_CONTACTS
});

export const connectedToWebsocket = () => ({
  type: types.CONNECTED
});

