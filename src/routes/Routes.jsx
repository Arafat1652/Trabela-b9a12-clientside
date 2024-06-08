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
import Profile from "../Pages/Dashboard/Common/Profile";
import DetailsStory from "../components/AllStory/DetailsStory";
import AllTouristStory from "../components/AllStory/AllTouristStory";
import GuideDetails from "../components/HomeComponents/GuideDetails/GuideDetails";
import MyBookings from "../Pages/Dashboard/Tourist/MyBookings";
import MyAssignedTours from "../Pages/Dashboard/Guides/MyAssignedTours";
import MyWishlist from "../Pages/Dashboard/Tourist/MyWishlist";
import ManageUsers from "../Pages/Dashboard/Admin/ManageUsers";
import AddPackage from "../Pages/Dashboard/Admin/AddPackage";
import AdminRoute from "./AdminRoute";
import GuideRoute from "./GuideRoute";
import Payment from "../Pages/Dashboard/Payment/Payment";



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
      //package details
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
      element:<TourItem/>,
     loader: ({params})=> fetch(`${import.meta.env.VITE_API_URL}/types/${params.tour_type}`)
    },
    {
      // Tour guide details page from meet our tour tab
      path: '/guideDetails/:id',
      element:<GuideDetails/>,
     loader: ({params})=> fetch(`${import.meta.env.VITE_API_URL}/guides/${params.id}`)
    },
    {
      //story details page
      path: '/storyDetails/:id',
      element:<DetailsStory/>,
      loader: ({params})=>fetch(`${import.meta.env.VITE_API_URL}/storys/${params.id}`)
    },
    {
      path: '/allStory',
      element: <AllTouristStory/>
    },
    
    {
      path: '/dashboard',
      element:<PrivateRoute><DashboardLayout/></PrivateRoute>,
      children:[
        {
          index: true,
          element: <PrivateRoute><Profile/></PrivateRoute>,
        },
        // tourist routes
        {
          path:'my-bookings',
          element: <PrivateRoute><MyBookings/></PrivateRoute>
         },
        {
          path:'my-wishlist',
          element: <PrivateRoute><MyWishlist/></PrivateRoute>
         },
        {
          path:'payment/:id',
          element: <Payment/>,
          // loader:({params})=>fetch(`${import.meta.env.VITE_API_URL}/my-bookings/${user?.email}${params.id}`)
         },
         // guide routes
        {
          path:'my-assignTour',
          element: <PrivateRoute><GuideRoute><MyAssignedTours/></GuideRoute></PrivateRoute>
         },
         // admin routes
        {
          path:'add-package',
          element: <PrivateRoute><AdminRoute><AddPackage/></AdminRoute></PrivateRoute>
         },
        {
          path:'manage-users',
          element: <PrivateRoute><AdminRoute><ManageUsers/></AdminRoute></PrivateRoute>
         },
       
      ]
    }
  ]);

  export default router