import { Link, useLoaderData, useParams } from "react-router-dom";
// import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import { useEffect, useState } from "react";
import { useTheme } from "../Route/ThemeProvider";


const IndividualBrand = () => {
   const { isDarkMode } =useTheme();
   const [cars, setCars] = useState([]);
   const { brandName } = useParams();
   console.log(brandName);

   console.log(cars)
   const data = useLoaderData();

   useEffect(() => {
      fetch('http://localhost:5000/cars')
      .then(res => res.json())
      .then(data => setCars(data))
   },[])

   const brand = cars.find(car => car.brand_name.toLowerCase() == brandName.toLowerCase());
   
   console.log(brand?.brand_image);

   // console.log(data);

   const brandedCar = data.filter(car => car.brandName.toLowerCase() == brandName.toLowerCase())
   console.log(brandedCar);

   if (brandName === 'BMW') {
      return (
         <div className="min-h-screen flex items-center justify-center">
            <h3 className="text-3xl text-amber-700">Sorry, There is no available products of brand {brandName}  </h3>
         </div>
      );
   }
   
   return (
      <div>
         <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
               {/* <img src="https://i.ibb.co/8YhQ2jj/23399.jpg" className="w-full" /> */}

               <div className="hero min-h-screen" style={{ backgroundImage: `url(${brand?.brand_image})` }}>
                  <div className="hero-overlay bg-opacity-60"></div>
                  <div className="hero-content text-center text-neutral-content">
                     <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello, Welcome to <span className="text-amber-600">{brandName}</span> brand products </h1>
                        <p className="mb-5 text-2xl">We have different types of collections.</p>

                     </div>
                  </div>
               </div>

               <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide4" className="btn btn-circle">❮</a>
                  <a href="#slide2" className="btn btn-circle">❯</a>
               </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
               {/* <img src="https://i.ibb.co/hy5GhRG/31750.jpg" className="w-full" /> */}

               <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/FWcHTtf/images.jpg)' }}>
                  <div className="hero-overlay bg-opacity-60"></div>
                  <div className="hero-content text-center text-neutral-content">
                     <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello, Welcome to <span className="text-amber-600">{brandName}</span> brand products </h1>
                        <p className="mb-5 text-2xl">We have different types of collections.</p>

                     </div>
                  </div>
               </div>

               <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide1" className="btn btn-circle">❮</a>
                  <a href="#slide3" className="btn btn-circle">❯</a>
               </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
               {/* <img src="https://i.ibb.co/n7j6Mjv/BMW-i5-review.jpg" className="w-full" /> */}

               <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/4wbs5n6/23rd-century-futuristic-truck-with-hyper-modern-drive-wide-angle-lens-futuristic-skyscraper-backgrou.jpg)' }}>
                  <div className="hero-overlay bg-opacity-60"></div>
                  <div className="hero-content text-center text-neutral-content">
                     <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello, Welcome to <span className="text-amber-600">{brandName}</span> brand products </h1>
                        <p className="mb-5 text-2xl">We have different types of collections.</p>

                     </div>
                  </div>
               </div>

               <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide2" className="btn btn-circle">❮</a>
                  <a href="#slide4" className="btn btn-circle">❯</a>
               </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
               {/* <img src="https://i.ibb.co/Fbcntt2/2018-Tesla-Model-S-75-D.jpg" className="w-full" /> */}

               <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/Fbcntt2/2018-Tesla-Model-S-75-D.jpg)' }}>
                  <div className="hero-overlay bg-opacity-60"></div>
                  <div className="hero-content text-center text-neutral-content">
                     <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello, Welcome to <span className="text-amber-600">{brandName}</span> brand products </h1>
                        <p className="mb-5 text-2xl">We have different types of collections.</p>

                     </div>
                  </div>
               </div>

               <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide3" className="btn btn-circle">❮</a>
                  <a href="#slide1" className="btn btn-circle">❯</a>
               </div>
            </div>
         </div>
         <h1 className="text-center text-5xl mt-16 pb-10"><span className="text-amber-600">{brandName} Brand Products</span></h1>
         {/* <h1>Branded car data : {brandedCar.length} </h1> */}
         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {
               brandedCar.map(car => <div key={car._id} className={isDarkMode ? 'dark-mode card shadow-xl' : 'card bg-base-100 shadow-xl'}>
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

                        <Link to={`/productDetails/${car._id}`}><button className="btn btn-sm"><div className="badge badge-outline">Details</div></button></Link>
                        <Link to={`/productUpdate/${car._id}`}><button className="btn btn-sm"><div className="badge badge-outline">Update</div></button></Link>

                     </div>
                  </div>
               </div>)
            }
         </div>



      </div>
   );
};

export default IndividualBrand;