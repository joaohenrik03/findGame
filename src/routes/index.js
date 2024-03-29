import { FavoritesContextProvider } from "../contexts/FavoritesContext";
import { AppRoutes } from "./app.routes";

export function Router() {
  return (
    <FavoritesContextProvider>
      <AppRoutes />
    </FavoritesContextProvider>
  )
}
