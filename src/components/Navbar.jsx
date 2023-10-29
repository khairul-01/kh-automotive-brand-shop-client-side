import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";


const Navbar = () => {

   const { logOut, user } = useContext(AuthContext);

   const navigate = useNavigate()
   const navLinks = <>
      <li><NavLink to='/'>Home</NavLink></li>
      <li><NavLink to='/addProduct'>Add Product</NavLink></li>
      <li><NavLink to='/addCart'>My Cart</NavLink></li>
   </>

   const hanleSignOut = () => {
      logOut()
         .then(() => {
            console.log('User sign out successfully.')
            navigate('/')
         })
         .catch(error => {
            console.error(error);
         })
   }

   return (
      <div>
         <div className="navbar bg-base-100">
            <div className="navbar-start">
               <div className="dropdown">
                  <label tabIndex={0} className="btn btn-ghost lg:hidden">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                  </label>
                  <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                     {navLinks}
                  </ul>
               </div>
               <div className="flex gap-1 items-center">
                  <img className="w-10 h-10" src="https://i.ibb.co/tcdbTnW/automotive-logo-design-vector.jpg" alt="" />
                  <a className="btn btn-ghost normal-case text-xl"><span className="text-green-700 font-bold">KH</span> Automotive</a>
               </div>
            </div>
            <div className="navbar-center hidden lg:flex">
               <ul className="menu menu-horizontal px-1">
                  {navLinks}
               </ul>
            </div>
            <div className="navbar-end">

               {
                  user ?
                     <div className="flex gap-2">
                        <p>{user?.displayName ? user.displayName : user.email}</p>
                        {
                           user.photoURL ?
                              <div className="w-8 rounded-full">
                                 <img src={user.photoURL} />
                              </div>
                              :
                              <div className="avatar online">
                                 <div className="w-8 rounded-full">
                                    <img src="https://i.ibb.co/2YxnXZT/images.jpg" />
                                 </div>
                              </div>
                        }
                        <button onClick={hanleSignOut} className="btn btn-sm">sign out</button>
                     </div>
                     :
                     <Link to='/login'><a className="btn">Login</a></Link>
               }
            </div>
         </div>
      </div>
   );
};

export default Navbar;