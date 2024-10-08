"use client"
import { createContext, useContext, useState } from 'react';

const StateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export function ContextProvider({ children }){
  const [screenSize, setScreenSize] = useState(undefined);
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);



  const handleClick = (clicked) => setIsClicked({ ...initialState, [clicked]: true });

  return (
    <StateContext.Provider 
      value={{ 
        activeMenu, 
        setActiveMenu, 
        screenSize, 
        setScreenSize, 
        isClicked, 
        handleClick, 
        setIsClicked, 
        initialState 
        }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);

