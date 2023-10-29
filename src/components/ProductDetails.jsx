import { useLoaderData, useParams } from "react-router-dom";
import Swal from 'sweetalert2'


const ProductDetails = () => {

   const car = useLoaderData();
   const { id } = useParams()
   console.log(id);
   
   const handleAddCart = () => {
      fetch('http://localhost:5000/cars/carCarts', {
         method: 'POST',
         headers: {
            'content-type' : 'application/json'
         },
         body: JSON.stringify(car)
      })
      .then(res => res.json())
      .then(data => {
         console.log(data);
         if (data.insertedId) {
            Swal.fire({
               title: 'Success!',
               text: 'Product added to cart successfully',
               icon: 'success',
               confirmButtonText: 'Cool'
            })
         }
      })
   }
   return (
      <div>
         <h1>Product Details : {car.name} </h1>
         <div className="card bg-base-100 shadow-xl">
            <figure><img className="w-full" src={car.image} alt="Branded Car" /></figure>
            <div className="card-body">
               <h2 className="card-title">
                  Name: {car.name}
                  <div className="badge badge-secondary">Brand: {car.brandName}</div>
               </h2>
               <h2 className="card-title">
                  Type:
                  <div className="badge badge-secondary">{car.type}</div>
               </h2>
               <h2 className="card-title">
                  Price: {car.price}
               </h2>
               <p>Details : {car.shortDesc} </p>
               <h2 className="card-title">
                  Ratings: {car.rating}
               </h2>
               <div className="card-actions justify-end">

                  <button onClick={handleAddCart} className="btn btn-primary"><div className="badge badge-outline">Add To Cart</div></button>

               </div>
            </div>
         </div>
      </div>
   );
};

export default ProductDetails;