import { createContext, useState } from "react";

export const FavoritesContext = createContext({});

export function FavoritesContextProvider({children}) {
  const [favoriteGames, setFavoriteGames] = useState([]);

  function handleAddGameToFav(gameData) {
    const currentFavorites = favoriteGames;
  
    const alreadySaved = currentFavorites.find(item => item.name === gameData.name);

    if (alreadySaved) { 
      console.log('Jogo já salvo');
      return;
    } else {
      const newGame = gameData;

      setFavoriteGames((oldValue) => [...oldValue, newGame]);
    }
  }

  function handleRemoveGameToFav(gameToDelete) {
    const newFavorites = favoriteGames.filter((item) => item.name !== gameToDelete);

    setFavoriteGames(newFavorites);
  }

  return (
    <FavoritesContext.Provider value={{
      favoriteGames,
      handleAddGameToFav,
      handleRemoveGameToFav
    }}>
      {children}
    </FavoritesContext.Provider>
  )
}
