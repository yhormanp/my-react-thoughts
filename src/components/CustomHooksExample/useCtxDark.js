import { useState, createContext, useContext, useMemo } from "react";

const darkContext = createContext({});

export const DarkProvider = ({ children }) => {
  const [dark, setDark] = useState(false);

  const darkValue = useMemo(() => [dark, setDark], [dark]);

  return (
      <darkContext.Provider value = {darkValue}>
          {children}
      </darkContext.Provider>
  )
};

export default function useCtxDark() {
  return useContext(darkContext)
}
