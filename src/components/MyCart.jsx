import { useLoaderData } from "react-router-dom";


const MyCart = () => {

   const addedCars = useLoaderData();
   return (
      <div>
         <div className="grid grid-cols-3 gap-5">
            {
               addedCars.map(car => <div key={car._id} className="card bg-base-100 shadow-xl">
                  <figure><img className="w-full h-96" src={car.image} alt="Branded Car" /></figure>
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
                     <h2 className="card-title">
                        Ratings: {car.rating}
                     </h2>
                     <div className="card-actions justify-end">

                        <button className="btn btn-error"><div className="badge badge-outline">Delete</div></button>

                     </div>
                  </div>
               </div>)
            }
         </div>
      </div>
   );
};

export default MyCart;