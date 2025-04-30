import React, { createContext, useState } from 'react';

const WebinarContext = createContext();

const WebinarProvider = ({ children }) => {
  const [webinars, setWebinars] = useState([]);


  return (
    <WebinarContext.Provider value={{ webinars, setWebinars }}>
      {children}
    </WebinarContext.Provider>
  );
};

export { WebinarContext, WebinarProvider };
