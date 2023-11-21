import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useTheme } from "../Route/ThemeProvider";
import './root.css';


const Root = () => {
   const { isDarkMode } = useTheme()
   return (

      <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
         <div className={`max-w-7xl mx-auto px-10`}>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
         </div>
      </div>

   );
};

export default Root;