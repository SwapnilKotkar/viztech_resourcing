import React, {createContext, useContext, useState, useEffect} from "react";

const Context = createContext();

export const ViewContext = ({children}) => {
  const [view, setview] = useState("");

  const handleView = (id) => {
    setview(id);
  };

  return(
    <Context.Provider value={{view, handleView}}>
        {children}
    </Context.Provider>
)
}

export const useViewContext = () => useContext(Context)