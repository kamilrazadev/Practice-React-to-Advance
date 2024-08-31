import { createContext, useState } from "react";

export const AppContext = createContext({});

export const ContextProvider = ({ children }) => {
  const [context, setContext] = useState("initial");
  return (
    <AppContext.Provider value={{ context, setContext }}>
      {children}
    </AppContext.Provider>
  );
};
