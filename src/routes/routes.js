import {createBrowserRouter,RouterProvider,Route,Link,} from "react-router-dom";
import Errorpage from "../Component/Errorpage/Errorpage";
import Layout from "../Component/Layout/Layout";
import Home from "../Pages/Home";
import SingleVideo from "../Pages/SingleVideo";

const routes =createBrowserRouter([
    {
        path:'/',
        element:<Layout></Layout>,
        errorElement:<Errorpage></Errorpage>,
        children:[
            {
                index:true,
                element:<Home></Home>
            },{
                path:'/video/:vid',
                element:<SingleVideo></SingleVideo>
            }
        ]
    }
])
export default routes;