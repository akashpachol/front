import Home from "../page/Home/Home";
import SignUp from "../page/Auth/SignUp/SignUp";
import ProductSection from "../page/ProductSection/ProductSection";
import Login from "../page/Auth/Login/Login";

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
        element: <Home />,
      },
      {
        path: "/ProductSection",
        element: <ProductSection />,
      },
    
  
 
    ];
  };
  
  export default UserRouters;