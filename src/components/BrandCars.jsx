import { NavLink } from "react-router-dom";


const BrandCars = ({ car }) => {

   return (
      <div>
         <NavLink to = {`/${car.brand_name}`}>
            <div className="rounded-lg">
               <img className="w-full rounded-lg h-72" src={car.brand_image} alt="" />
               <h1 className="text-center font-bold my-2">Brand Name: {car.brand_name}</h1>
            </div>
         </NavLink>

      </div>
   );
};

export default BrandCars;