import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { SearchProvider } from "./contexts/SearchContexts";

import { router } from "./router";

const rootElement = document.getElementById("root");
if (rootElement == null) {
  throw new Error(`Your HTML Document should contain a <div id="root"></div>`);
}

createRoot(rootElement).render(
  <SearchProvider>
    <RouterProvider router={router} />
  </SearchProvider>,
);
