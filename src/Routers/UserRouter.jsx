import Home from "../page/Home/Home";
import SignUp from "../page/Auth/SignUp/SignUp";
import ProductSection from "../page/ProductSection/ProductSection";
import Login from "../page/Auth/Login/Login";
import Product from "../page/Home/Product";
import UserAuth from "./UserAuth";
import EditProduct from "../page/Home/EditProduct";

const UserRouters = () => {
    return [
    
      {
        path: "/",
        element: <Login />,
      },
    
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/home",
        element:(   <UserAuth><Home /></UserAuth>), 
      },
      {
        path: "/ProductSection",
        element:(   <UserAuth><ProductSection /></UserAuth>), 

      },
      {
        path: "/product",
        element: <Product />,
      },
      {
        path: "/editProduct",
        element: <EditProduct />,
      },
 
    ];
  };
  
  export default UserRouters;