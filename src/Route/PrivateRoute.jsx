import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {

   const { loading, user } = useContext(AuthContext);
   const location = useLocation();

   if (loading) {
      return <div className="min-h-screen flex items-center justify-center">
         <span className="loading loading-dots loading-lg text-error"></span>
      </div>
   }
   if(user) {
      return children;
   }

   return <Navigate to ='/login' state={location.pathname}></Navigate>
};

export default PrivateRoute;