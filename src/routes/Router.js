import { createBrowserRouter } from "react-router-dom";
import Main from "../Components/Layout/Main";
import Home from "../pages/Home/Home";
import Library from "../Components/Library/Library";
import Favourites from "../Components/Favourites/Favourites";
import Memories from "../Components/Memories/Memories";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Library></Library>,
      },
      {
        path: "/favourites",
        element: <Favourites></Favourites>,
      },
      {
        path: "/memories",
        element: <Memories></Memories>,
      },
    ],
  },
]);

export default router;
