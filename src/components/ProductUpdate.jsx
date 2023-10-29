import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2'


const ProductUpdate = () => {
   const car = useLoaderData();
   console.log(car);

   const handleSubmitProduct = event => {
      event.preventDefault();
      const form = event.target;
      const image = form.image.value;
      const name = form.name.value;
      const brandName = form.brandName.value;
      const type = form.type.value;
      const price = form.price.value;
      const rating = form.rating.value;
      const updatedProducts = {
         image, name, brandName, type,price, rating
      }
      console.log(updatedProducts);
      fetch(`http://localhost:5000/cars/brandCars/${car._id}`, {
         method: 'PUT',
         headers: {
            'content-type' : 'application/json'
         },
         body: JSON.stringify(updatedProducts)
      })
      .then(res => res.json())
      .then(data => {
         console.log(data);
         if (data.modifiedCount>0) {
            Swal.fire({
               title: 'Success!',
               text: 'Product information updated successfully',
               icon: 'success',
               confirmButtonText: 'Cool'
            })
         }
      })
   }
   return (
      <div>
         <h1>Product update page</h1>
         <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
               <div className="text-center">
                  <h1 className="text-5xl font-bold">Update a Product now!</h1>

               </div>
               <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                  <form onSubmit={handleSubmitProduct} className="card-body">
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Image</span>
                        </label>
                        <input type="text" name="image" defaultValue={car.image} placeholder="Image" className="input input-bordered" required />
                     </div>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' defaultValue={car.name} placeholder="Name" className="input input-bordered" required />
                        {/* <label className="label">
                           <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label> */}
                     </div>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Brand Name</span>
                        </label>
                        <input type="text" name="brandName" defaultValue={car.brandName} placeholder="Brand Name" className="input input-bordered" required />
                     </div>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Type</span>
                        </label>
                        <input type="text" name="type" defaultValue={car.type} placeholder="Type" className="input input-bordered" required />
                     </div>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Price</span>
                        </label>
                        <input type="text" name="price" defaultValue={car.price} placeholder="Price" className="input input-bordered" required />
                     </div>

                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Rating</span>
                        </label>
                        <input type="text" name="rating" defaultValue={car.rating} placeholder="Rating" className="input input-bordered" required />
                     </div>
                     <div className="form-control mt-6">
                        <button className="btn btn-primary">Submit</button>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ProductUpdate;