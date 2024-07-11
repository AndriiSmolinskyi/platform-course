import React, { createContext, useState } from 'react'

const ForgotContext = createContext();

function ForgotProvider({ children }) {
  const [forgot, setForgot] = useState(null);

  return (
    <ForgotContext.Provider value={{ forgot, setForgot }}>
      {children}
    </ForgotContext.Provider>
  );
}

export { ForgotContext,  ForgotProvider };