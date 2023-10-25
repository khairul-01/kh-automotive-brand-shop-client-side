

const AddProduct = () => {
   return (
      <div>
         <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
               <div className="text-center">
                  <h1 className="text-5xl font-bold">Add Product now!</h1>
                  
               </div>
               <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                  <form className="card-body">
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Image</span>
                        </label>
                        <input type="text" name="image" placeholder="Image" className="input input-bordered" required />
                     </div>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                        {/* <label className="label">
                           <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label> */}
                     </div>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Brand Name</span>
                        </label>
                        <input type="text" name="brandName" placeholder="Brand Name" className="input input-bordered" required />
                     </div>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Type</span>
                        </label>
                        <input type="text" name="type" placeholder="Type" className="input input-bordered" required />
                     </div>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Price</span>
                        </label>
                        <input type="text" name="price" placeholder="Price" className="input input-bordered" required />
                     </div>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Short description</span>
                        </label>
                        <input type="text" name="shortDesc" placeholder="Short description" className="input input-bordered" required />
                     </div>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Rating</span>
                        </label>
                        <input type="text" name="rating" placeholder="Rating" className="input input-bordered" required />
                     </div>
                     <div className="form-control mt-6">
                        <button className="btn btn-primary">Add</button>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </div>
   );
};

export default AddProduct;