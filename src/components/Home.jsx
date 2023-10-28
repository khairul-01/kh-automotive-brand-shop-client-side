import { useEffect, useState } from "react";
import Bannner from "./Bannner";
import About from "./About";
import WhyChoose from "./WhyChoose";
import BrandCars from "./BrandCars";


const Home = () => {

   const [cars, setCars] = useState([]);

   useEffect(() => {
      fetch('http://localhost:5000/cars')
         .then(res => res.json())
         .then(data => {
            console.log(data);
            setCars(data)
         })
   }, [])
   return (
      <div>
         <Bannner></Bannner>
         <About></About>

         <div>
            <h1 className="text-center text-5xl font-bold mb-7">Our Brand New Cars</h1>
            <div className="grid grid-cols-3 gap-5 ">
               {/* {
               cars.map(car => <div key={car.id}>
                  <img className="w-full h-72" src={car.brand_image} alt="" />
                  <h1 className="text-center font-bold my-2">Brand Name: {car.brand_name}</h1>
               </div>)
               
            } */}
               {
                  cars.map(car => <BrandCars key={car._id} car={car} ></BrandCars>)
               }
            </div>
         </div>

         <WhyChoose></WhyChoose>
      </div>
   );
};

export default Home;