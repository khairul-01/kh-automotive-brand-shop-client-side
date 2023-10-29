import { Link } from "react-router-dom";


const ErrorPage = () => {
   return (
      <div className="min-h-screen flex justify-center items-center">
         <h1 className="text-5xl text-stone-800">Something Error happened</h1>
         <br />
         <Link to='/'><button className="btn btn-error">Go Home</button></Link>
      </div>
   );
};

export default ErrorPage;