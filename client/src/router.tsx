import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Albums from "./pages/Albums";
import Artists from "./pages/Artists";
import Conditions from "./pages/Conditions";
import Genre from "./pages/GenreDetail";
import Home from "./pages/Home";
import Politique from "./pages/Politique";
import SearchPage from "./pages/SearchPage";
import type { MusicData } from "./types/musicSection";

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "albums",
        element: <Albums />,
      },
      {
        path: "artists",
        element: <Artists />,
      },
      {
        path: "searchpage",
        element: <SearchPage />,
      },
      {
        path: "Conditions",
        element: <Conditions />,
      },
      {
        path: "Politique",
        element: <Politique />,
      },
      {
        path: "Genre/:genre",
        element: <Genre />,
        loader: async ({ params }) => {
          try {
            const response = await fetch(
              "http://localhost:4000/api/music-data",
            );

            if (!response.ok) {
              throw new Error("Failed to fetch genres");
            }

            const data = await response.json();

            const genreData = data.find(
              (item: MusicData) => item.genre === params.genre,
            );

            if (!genreData) {
              throw new Error(`Genre '${params.genre}' not found`);
            }

            return genreData;
          } catch (error) {
            console.error("Loader error:", error);
            throw error;
          }
        },
      },
    ],
  },
]);
