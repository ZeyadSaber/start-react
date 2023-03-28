import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { About } from "./Components/About/About";
import { Home } from "./Components/Home/Home";
import { MainLayout } from "./Components/MainLayout/MainLayout";
import { Navbar } from "./Components/Navbar/Navbar";
import { Portfolio } from "./Components/Portfolio/Portfolio";

const router = createBrowserRouter([{ path: "/", element:<MainLayout/>
}]);

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
