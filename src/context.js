import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [description, setDescription] = useState(null);
  const [picture, setPicture] = useState(null);
  const [title, setTitle] = useState(null);

  return (
    <AppContext.Provider
      value={{
        description,
        setDescription,
        picture,
        setPicture,
        title,
        setTitle,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
