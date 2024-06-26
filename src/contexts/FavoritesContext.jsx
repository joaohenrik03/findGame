import { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const FavoritesContext = createContext({});

export function FavoritesContextProvider({children}) {
  const [favoriteGames, setFavoriteGames] = useState([]);
  const [favoriteLoading, setFavoriteLoading] = useState(false);

  useEffect(() => {
    async function getFavoritesInStorage() {
      setFavoriteLoading(true);

      try {
        const response = await AsyncStorage.getItem('findGame-1.0.0');

        setFavoriteGames(JSON.parse(response));
      } catch (error) {
        console.log(error);
      } finally {
        setFavoriteLoading(false);
      }
    }

    getFavoritesInStorage();
  }, []);

  function handleAddGameToFav(gameData) {
    const currentFavorites = favoriteGames;
  
    const alreadySaved = currentFavorites.find(item => item.name === gameData.name);

    if (alreadySaved) { 
      console.log('Jogo já salvo');
      return;
    } else {
      const newGame = gameData;

      setFavoriteGames((oldValue) => [...oldValue, newGame]);
      setFavoritesInStorage([...favoriteGames, newGame]);
    }
  }

  function handleRemoveGameToFav(gameToDelete) {
    const newFavorites = favoriteGames.filter((item) => item.name !== gameToDelete);

    setFavoriteGames(newFavorites);
    setFavoritesInStorage(newFavorites);
  }

  async function setFavoritesInStorage(favorites) {
    try {
      const jsonValue = JSON.stringify(favorites);
      await AsyncStorage.setItem('findGame-1.0.0', jsonValue);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <FavoritesContext.Provider value={{
      favoriteGames,
      favoriteLoading,
      handleAddGameToFav,
      handleRemoveGameToFav
    }}>
      {children}
    </FavoritesContext.Provider>
  )
}
