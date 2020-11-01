import React, { createContext, useContext, useState, useEffect } from 'react';



export const HomeContext = createContext();


export default function HomeProvider({ children }) {

  const [selectedUser, setSelectedUser] = useState({ user: null });
  const [toggle, setToggle] = useState(false);
  const [messageLoad, setMessageLoad] = useState([]);

  return (
    <HomeContext.Provider
      value={{
        selectedUser, setSelectedUser,
        toggle, setToggle, messageLoad, setMessageLoad
      }}>
      {children}
    </HomeContext.Provider>
  )
}

export function useHomeContext() {
  const context = useContext(HomeContext);
  const { selectedUser, toggle, setSelectedUser, setToggle, messageLoad, setMessageLoad } = context;
  return { selectedUser, toggle, setSelectedUser, setToggle,  messageLoad, setMessageLoad };
}
