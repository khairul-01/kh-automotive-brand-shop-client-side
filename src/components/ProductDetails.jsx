import { useLoaderData, useParams } from "react-router-dom";


const ProductDetails = () => {
   const car = useLoaderData();
   const { id } = useParams()
   console.log(id);
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

                  <button className="btn btn-primary"><div className="badge badge-outline">Add To Cart</div></button>

               </div>
            </div>
         </div>
      </div>
   );
};

export default ProductDetails;