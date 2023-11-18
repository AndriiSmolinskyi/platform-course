import React, { createContext, useState } from 'react'

const HomeContext = createContext();

function HomeProvider({ children }) {
  const [home, setHome] = useState(null);

  return (
    <HomeContext.Provider value={{ home, setHome }}>
      {children}
    </HomeContext.Provider>
  );
}

export { HomeContext,  HomeProvider };