import { createContext, useState } from "react";

export const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  const addToFavourites = (student) => {
    if (!favourites.find((s) => s.id === student.id)) {
      setFavourites([...favourites, student]);
    }
  };

  const removeFromFavourites = (id) => {
    setFavourites(favourites.filter((s) => s.id !== id));
  };

  return (
    <StudentContext.Provider value={{ favourites, addToFavourites, removeFromFavourites }}>
      {children}
    </StudentContext.Provider>
  );
};