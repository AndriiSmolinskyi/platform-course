import React, { createContext, useState } from 'react'

const HmContext = createContext();

function HmProvider({ children }) {
  const [hm, setHm] = useState(null);

  return (
    <HmContext.Provider value={{ hm, setHm }}>
      {children}
    </HmContext.Provider> 
  );
}

export { HmContext,  HmProvider };