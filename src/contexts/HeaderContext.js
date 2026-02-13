import { createContext, useContext, useState } from 'react';

const HeaderContext = createContext();

export function HeaderProvider({ children }) {
  const [headerHeight, setHeaderHeight] = useState(0);

  return (
    <HeaderContext.Provider value={{ headerHeight, setHeaderHeight }}>
      {children}
    </HeaderContext.Provider>
  );
}

// we could also not export this and just use useContext(HeaderContext) directly in the components, 
// but this is a nice abstraction layer in case we want to add more logic later
export function useHeader() {
  return useContext(HeaderContext);
}
