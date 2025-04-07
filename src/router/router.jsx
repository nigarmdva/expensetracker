import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";
import UserProfile from "../components/UserProfile";
import Home from "../pages/home/Home";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path:"register",
    element:<Register/>
  },
  {
    path:"login",
    element:<Login/>
  },
  {
    path:"/user",
    element:<UserProfile/>}
]);
