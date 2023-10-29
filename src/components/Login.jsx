import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Swal from 'sweetalert2'

const Login = () => {

   const {userLogin, signWithGoogle } = useContext(AuthContext);

   const handleGoogle = () => {
      signWithGoogle()
      .then(data => {
         console.log(data.user);
      })
      .catch(error => {
         console.error(error);
      })
   }
   const handleLogin = (event) => {
      event.preventDefault();
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;
      const user = {email, password};
      console.log(user);

      userLogin(email, password)
      .then(data => {
         console.log(data.user)
         Swal.fire({
            title: 'Success!',
            text: 'User login successfully',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
      })
      .catch(error => {
         console.error(error);
         const errorCode = error.code;
         if(errorCode === 'auth/wrong-password') {
            Swal.fire({
               icon: 'error',
               title: 'Oops...',
               text: 'Your password is wrong!',
             })
         }
         else if(errorCode === 'auth/user-not-found') {
            Swal.fire({
               icon: 'error',
               title: 'Oops...',
               text: 'Your mail does not match!',
             })
         }
         else {
            Swal.fire({
               icon: 'error',
               title: 'Oops...',
               text: 'Your password or email does not matched!',
             })
         }
      })
   }
   return (
      <div>
         <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
               <div className="text-center">
                  <h1 className="text-5xl font-bold">Login now!</h1>

               </div>
               <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                  <form onSubmit={handleLogin} className="card-body">
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
                           <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                     </div>
                     <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                     </div>
                  </form>
                  <div>
                     <p className="p-3">Sign in with <button onClick={handleGoogle} className="btn btn-secondary btn-sm">Google</button></p>
                  </div>
                  <p className="mb-3 px-3">Don't have an account? Please <Link to='/registration'><button className="btn btn-accent btn-sm">Register</button></Link> </p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Login;