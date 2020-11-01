import React, { createContext, useContext, useState } from 'react';



export const HomeContext = createContext();


export default function HomeProvider({ children }) {

  const [selectedUser, setSelectedUser] = useState({ user: null });
  const [toggle, setToggle] = useState(false);

  return (
    <HomeContext.Provider
      value={{
        selectedUser, setSelectedUser,
        toggle, setToggle
      }}>
      {children}
    </HomeContext.Provider>
  )
}

export function useHomeContext() {
  const context = useContext(HomeContext);
  const { selectedUser, toggle, setSelectedUser, setToggle } = context;
  return { selectedUser, toggle, setSelectedUser, setToggle };
}
