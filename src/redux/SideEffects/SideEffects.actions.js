import types from './SideEffects.types';

export const changeTheme = (theme) => ({
  type: types.CHANGE_THEME,
  payload: theme
});

export const displayHeaderFooter = () => ({
  type:types.SHOULD_SHOW_FOOTER_AND_HEADER,
});