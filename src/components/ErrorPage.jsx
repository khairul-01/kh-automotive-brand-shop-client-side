import { Link } from "react-router-dom";
import { useTheme } from "../Route/ThemeProvider";
import Navbar from "./Navbar";


const ErrorPage = () => {
   const { isDarkMode } = useTheme();
   return (
      <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
         <Navbar></Navbar>
         <div className="min-h-screen flex justify-center items-center gap-3">
            <h1 className="text-5xl">Something Error happened</h1>
            <br />
            <Link to='/'><button className="btn btn-error">Go Home</button></Link>
         </div>
      </div>
   );
};

export default ErrorPage;