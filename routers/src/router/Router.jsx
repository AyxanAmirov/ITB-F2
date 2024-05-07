import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import List from "../pages/List";




export const router = createBrowserRouter([
    {
      element:<Layout/>,
      path:"/",
      children:[
        {
            element:<Home/>,
            index:true
        },
        {
            element:<List/>,
            path:"/list"
        }
      ]
    }
])