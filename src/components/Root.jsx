import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";


const Root = () => {
   return (
      <div className="max-w-7xl mx-auto px-10">
         <Navbar></Navbar>
         <Outlet></Outlet>
         <Footer></Footer>
      </div>
   );
};

export default Root;