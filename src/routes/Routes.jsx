import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home";
import Login from "../components/Authentication/Login";
import Register from "../components/Authentication/Register";
import AllPackages from "../components/AllPackages/AllPackages";
import PackageDetails from "../components/PackageDetailsPage/PackageDetails";
import TourItem from "../components/TourTypeSection/TourItem";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../Layouts/DashboardLayout";

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
        path: '/login',
        element: <Login/>
    },
    {
        path: '/register',
        element: <Register/>
    },
    {
      path: '/details/:id',
      element: <PackageDetails/>,
      loader: ({params})=>fetch(`${import.meta.env.VITE_API_URL}/packages/${params.id}`)
    },
    {
        path: '/allPackage',
        element: <AllPackages/>
    },
    {
      path: '/tourItem/:tour_type',
      element:<PrivateRoute><TourItem/></PrivateRoute>,
     loader: ({params})=> fetch(`${import.meta.env.VITE_API_URL}/types/${params.tour_type}`)
    },
    {
      path: '/dashboard',
      element:<PrivateRoute><DashboardLayout/></PrivateRoute>,
      children:[
        {
          index: true,
          // element: <PrivateRoute><Statistics/></PrivateRoute>,
        },
       
      ]
    }
  ]);

  export default router