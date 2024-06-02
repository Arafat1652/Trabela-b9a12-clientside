import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home";
import Login from "../components/Authentication/Login";
import Register from "../components/Authentication/Register";
import AllPackages from "../components/AllPackages/AllPackages";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children:[
        {
            index: true,
            element: <Home/>
        }
      ]
    },
    {
        path: '/allPackage',
        element: <AllPackages/>
    },
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/register',
        element: <Register/>
    }
  ]);

  export default router