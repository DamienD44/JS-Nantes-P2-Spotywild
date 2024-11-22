import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import type { MusicData } from "./types/musicSection";

/* ************************************************************************* */

import App from "./App";
import Albums from "./pages/Albums";
import Artists from "./pages/Artists";
import Conditions from "./pages/Conditions";
import Genre from "./pages/Genre";
import Home from "./pages/Home";
import Politique from "./pages/Politique";
import SearchPage from "./pages/SearchPage";

/* ************************************************************************* */

const router = createBrowserRouter([
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

/* ************************************************************************* */

const rootElement = document.getElementById("root");
if (rootElement == null) {
  throw new Error(`Your HTML Document should contain a <div id="root"></div>`);
}

createRoot(rootElement).render(
  // <StrictMode>
  <RouterProvider router={router} />,
  // </StrictMode>,
);

/**
 * Helpful Notes:
 *
 * 1. Adding More Routes:
 *    To add more pages to your app, first create a new component (e.g., About.tsx).
 *    Then, import that component above like this:
 *
 *    import About from "./pages/About";
 *
 *    Add a new route to the router:
 *
 *      {
 *        path: "/about",
 *        element: <About />,  // Renders the About component
 *      }
 *
 * 2. Try Nested Routes:
 *    For more complex applications, you can nest routes. This lets you have sub-pages within a main page.
 *    Documentation: https://reactrouter.com/en/main/start/tutorial#nested-routes
 *
 * 3. Experiment with Dynamic Routes:
 *    You can create routes that take parameters (e.g., /users/:id).
 *    Documentation: https://reactrouter.com/en/main/start/tutorial#url-params-in-loaders
 */
