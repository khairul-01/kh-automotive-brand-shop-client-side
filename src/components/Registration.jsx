import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Swal from 'sweetalert2'
import { useTheme } from "../Route/ThemeProvider";

const Registration = () => {

   const { userRegistration } = useContext(AuthContext);

   const { isDarkMode } = useTheme();

   const handleRegistration = (event) => {
      event.preventDefault();
      const form = event.target;
      const name = form.name.value;
      const photo = form.photo.value;
      const email = form.email.value;
      const password = form.password.value;
      const user = { name, photo, email, password };
      console.log(user);

      if (password.length < 6) {
         Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Your password should be at least six character!',
         })
      }
      else if (!/[A-Z]/.test(password)) {
         Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Your password should have a uppercase character!',
         })
      }
      else if (!/[!#$%^&*()_+{}:;<>.?~]/.test(password)) {
         Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Your password should have a special character!',
         })
      }
      else {
         userRegistration(email, password)
            .then(data => {
               console.log(data.user)
               Swal.fire({
                  title: 'Success!',
                  text: 'Registration completed successfully',
                  icon: 'success',
                  confirmButtonText: 'Cool'
                })
            })
            .catch(error => {
               console.error(error);
            })
      }


   }
   return (
      <div>
         <div className={isDarkMode ? 'dark-mode hero min-h-screen' : 'hero min-h-screen bg-base-200'}>
            <div className="hero-content flex-col ">
               <div className="text-center">
                  <h1 className="text-5xl font-bold">Register now!</h1>

               </div>
               <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                  <form onSubmit={handleRegistration} className="card-body">
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Your Name" className="input input-bordered" />
                     </div>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Photo</span>
                        </label>
                        <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" />
                     </div>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                     </div>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                           <a href="#" className="label-text-alt link link-hover">Terms & Conditions</a>
                        </label>
                     </div>
                     <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                     </div>
                  </form>
                  <h1 className="mb-3 px-3">Already have an account? Please <Link to='/login'><button className="btn btn-accent btn-sm">Login</button></Link>  </h1>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Registration;