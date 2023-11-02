import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Router";

function App() {
  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
