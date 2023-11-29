import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [userName, setUserName] = useState("");
  const [userLocation, setUserLocation] = useState("");

  const updateName = (name) => {
    setUserName(name);
  };

  const updateLocation = (location) => {
    setUserLocation(location);
  };

  const contextValue = {
    userName,
    userLocation,
    updateName,
    updateLocation
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
