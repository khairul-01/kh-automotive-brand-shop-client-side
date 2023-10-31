import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2'

const MyCart = () => {

   const addedCars = useLoaderData();
   const [cars, setCars] = useState(addedCars);

   const handleDelete = id => {
      console.log(id);

      Swal.fire({
         title: 'Are you sure?',
         text: "You won't be able to revert this!",
         icon: 'warning',
         showCancelButton: true,
         confirmButtonColor: '#3085d6',
         cancelButtonColor: '#d33',
         confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
         if (result.isConfirmed) {
            fetch(`https://b8a10-brandshop-server-side-khairul-01-fyam160fq.vercel.app/cars/carCarts/${id}`, {
               method: 'DELETE',
            })
               .then(res => res.json())
               .then(data => {
                  console.log(data);
                  if (data.deletedCount > 0) {
                     const remaining = cars.filter(car => car._id !== id);
                     setCars(remaining);
                     Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                     )
                  }
               })
            
         }
      })


   }
   return (
      <div>
         <div className="grid grid-cols-3 gap-5">
            {
               cars.map(car => <div key={car._id} className="card bg-base-100 shadow-xl">
                  <figure><img className="w-full h-72" src={car.image} alt="Branded Car" /></figure>
                  <div className="card-body">
                     <h2 className="card-title">
                        Name: {car.name}
                        <div className="bg-orange-600 rounded-lg px-3">Brand: {car.brandName}</div>
                     </h2>
                     <h2 className="">
                        Type: 
                        <span className="">{car.type}</span>
                     </h2>
                     <h2 className="">
                        Price: {car.price}
                     </h2>
                     <h2 className="">
                        Ratings: {car.rating}
                     </h2>
                     <div className="card-actions justify-end">

                        <button onClick={() => handleDelete(car._id)} className="btn btn-error"><div className="badge badge-outline">Delete</div></button>

                     </div>
                  </div>
               </div>)
            }
         </div>
      </div>
   );
};

export default MyCart;