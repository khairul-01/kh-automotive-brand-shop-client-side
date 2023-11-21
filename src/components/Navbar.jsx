import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { useTheme } from "../Route/ThemeProvider";
import './root.css';


const Navbar = () => {

   // const { isDarkMode } = useTheme();

   const { logOut, user } = useContext(AuthContext);
   const { isDarkMode, toggleTheme } = useTheme();

   const navigate = useNavigate()
   const navLinks = <>
      <li><NavLink to='/'>Home</NavLink></li>
      <li><NavLink to='/addProduct'>Add Product</NavLink></li>
      <li><NavLink to='/addCart'>My Cart</NavLink></li>
      {
         !user && <li><NavLink to='/login'>Login</NavLink></li>
      }
      
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
      <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
         <div className={isDarkMode ? 'dark-mode navbar' : 'light-mode navbar bg-base-100'}>
            <div className="navbar-start">
               <div className="dropdown">
                  <label tabIndex={0} className="btn btn-ghost lg:hidden">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                  </label>
                  <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                     {navLinks}
                  </ul>
               </div>
               <div className="hidden md:flex gap-1 items-center">
                  <a className="btn btn-ghost normal-case text-xl">
                     <img className="w-9 h-10 rounded-full" src="https://i.ibb.co/FWcHTtf/images.jpg" alt="KH Automotive logo" />
                     <span className="text-green-700 font-bold">KH</span> Automotive
                  </a>

               </div>
            </div>
            <div className="navbar-center hidden lg:flex">
               <ul className="menu menu-horizontal px-1">
                  {navLinks}
               </ul>

            </div>
            <div className="navbar-end">
               <button onClick={toggleTheme} className="btn btn-sm btn-success ml-9"><div className="badge badge-secondary">{isDarkMode ? 'Dark Mode' : 'Light Mode'}</div></button>
               {
                  user ?
                     <div className={"flex gap-2 items-center"}>
                        <p className="font-bold">{user?.displayName ? user.displayName : user.email}</p>
                        {
                           user.photoURL ?
                              <div className="w-8 ">
                                 <img className="rounded-full" src={user.photoURL} />
                              </div>
                              :
                              <div className="avatar online">
                                 <div className="w-8 rounded-full">
                                    <img src="https://i.ibb.co/2YxnXZT/images.jpg" />
                                 </div>
                              </div>
                        }
                        <button onClick={hanleSignOut} className="btn btn-sm btn-info">sign out</button>
                     </div>
                     :
                     <div className="avatar placeholder">
                        <div className="bg-neutral text-neutral-content rounded-full w-32 h-9">
                           <span className="">User Info</span>
                        </div>
                     </div>
               }
            </div>
         </div>
         {/* <div className="py-2 flex justify-end gap-1">
            <span className="font-bold">Change Theme</span>
            <input onClick={toggleTheme} type="checkbox" className="toggle toggle-error" checked />
            <span>{isDarkMode ? 'Dark Mode' : 'Light Mode'}</span>
         </div> */}
      </div>
   );
};

export default Navbar;