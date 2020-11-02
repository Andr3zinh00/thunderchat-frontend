import React, { createContext, useState, useContext } from 'react';

import light from '../styles/theme/light';
import dark from '../styles/theme/dark';
import usePersistedState from '../utils/usePersistedState';

export const ToggleThemeContext = createContext();

export default function ToggleThemeProvider({ children }) {
    const [theme, setTheme] = usePersistedState('theme',light);
    const [toggle, setToggle] = usePersistedState('toggle', false);

    const toggleTheme = () => {
        setToggle(!toggle);
        setTheme(theme.title === 'light' ? dark : light)
    };

    return (
        <ToggleThemeContext.Provider
            value={{
                toggleTheme,
                theme,
                setTheme,
                toggle
            }}
        >
            {children}
        </ToggleThemeContext.Provider>
    )
}
export function useToggleThemeContext() {
    const context = useContext(ToggleThemeContext);
    const { toggleTheme, theme, setTheme, toggle } = context;
    return { toggleTheme, theme, setTheme, toggle };
}