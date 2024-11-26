import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import { router } from "./router";

<<<<<<< HEAD
// Import the main app component
import App from "./App";
import Albums from "./pages/Albums";
import Artists from "./pages/Artists";
import Conditions from "./pages/Conditions";
import Home from "./pages/Home";
import Politique from "./pages/Politique";
import SearchPage from "./pages/SearchPage";
import AlbumDetails from "./components/Details";

// Import additional components for new routes
// Try creating these components in the "pages" folder

// import About from "./pages/About";
// import Contact from "./pages/Contact";

/* ************************************************************************* */

// Create router configuration with routes
// You can add more routes as you build out your app!
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
        path: "titles",
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
        path: "details/:id",
        element: <AlbumDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:4000/api/music-data/${params.id}`),
      },
    ], // Renders the App component for the home page
  },
  // Try adding a new route! For example, "/about" with an About component
]);

/* ************************************************************************* */

// Find the root element in the HTML document
=======
>>>>>>> 966c24271bff77f60728a2165d2ecb71165986d1
const rootElement = document.getElementById("root");
if (rootElement == null) {
  throw new Error(`Your HTML Document should contain a <div id="root"></div>`);
}

createRoot(rootElement).render(<RouterProvider router={router} />);
