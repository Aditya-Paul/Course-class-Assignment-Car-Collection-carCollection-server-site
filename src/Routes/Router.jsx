import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Erropage from "../Root/Erropage";
import Home from "../Components/Home/Home";
import Login from "../Components/Log & Reg/Login";
import Register from "../Components/Log & Reg/Register";
import AddProduct from "../Components/Forms/AddProduct";
import UpdateProduct from "../Components/Forms/UpdateProduct";
import AddBrand from "../Components/Forms/AddBrand";
import Mycart from "../Components/My_cart/Mycart";
import PrivateRoute from "./PrivateRoute";
import Brandsitem from "../Components/BrandsItem/Brandsitem";
import Detail from "../Components/Details/Detail";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <Erropage></Erropage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('https://car-collection-server.vercel.app/brands')
            },
            {
                path: "/add_product",
                element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>,
            },
            {
                path: "/add_brand",
                element: <AddBrand></AddBrand>,
            },
            {
                path: "/my_cart/:email",
                element: <PrivateRoute><Mycart></Mycart></PrivateRoute>,
                loader: ({params}) => fetch(`https://car-collection-server.vercel.app/carts/${params.email}`)
            },
            {
                path: "/:brandname",
                element: <Brandsitem></Brandsitem>,
                loader: ({ params }) => fetch(`https://car-collection-server.vercel.app/products/${params.brandname}`)
            },
            {
                path: "/details/:id",
                element: <PrivateRoute><Detail></Detail></PrivateRoute>,
                loader: ({ params }) => fetch(`https://car-collection-server.vercel.app/product/${params.id}`)
            },
            {
                path: "/update/:id",
                element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
                loader: ({ params }) => fetch(`https://car-collection-server.vercel.app/product/${params.id}`)
            },
            {
                path: "/login",
                element: <Login></Login>,
            }
            ,
            {
                path: "/register",
                element: <Register></Register>
            }
        ]
    },
]);

export default router