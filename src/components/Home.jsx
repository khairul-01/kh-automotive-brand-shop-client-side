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
   console.log(cars);
   return (
      <div className="space-y-9">
         <Bannner></Bannner>
         <About></About>

         <br />
         <div className="">
            <h1 className="text-center text-5xl font-bold mb-7 mt-48 md:mt-3">Our Brand New Cars</h1>
            {
               (!cars || !cars.length) ?
                  <div className="h-96 flex flex-col items-center justify-center">
                     <span className="loading loading-dots loading-lg text-error"></span>
                     <h1 className="text-error font-bold text-2xl">Sorry for invenience  </h1>
                     <h1 className="text-primary font-bold text-2xl">Please wait & refresh</h1>
                  </div>
                  :
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
                     {
                        cars.map(car => <BrandCars key={car._id} car={car} ></BrandCars>)
                     }
                  </div>
            }
         </div>

         <WhyChoose></WhyChoose>
      </div>
   );
};

export default Home;