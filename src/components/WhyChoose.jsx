import { useTheme } from "../Route/ThemeProvider";
import './root.css';

const WhyChoose = () => {
   const { isDarkMode } = useTheme();
   return (
      <div>
         <div className={isDarkMode ? 'dark-mode hero mt-9' : 'hero mt-9 bg-base-200'}>
            <div className=" text-center">
               <div className=''>
                  <h1 className="text-5xl font-bold my-8">Why Choose Us?</h1>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5 p-5">
                     <div>
                        <img className="h-[350px] rounded-lg" src="https://i.ibb.co/G3YYChR/depositphotos-43131035-stock-illustration-product-naming-brand-name-concept.webp" alt="" />
                        <h3 className="text-2xl font-bold my-3">Wide range of brands</h3>
                     </div>
                     <div>
                        <img className="h-[350px] w-full rounded-lg" src="https://i.ibb.co/wgzXyZ3/trustee-word-hang-banner-wall-d-rendering-142821845.webp" alt="" />
                        <h3 className="text-2xl font-bold my-3">Trusted by our clients</h3>
                     </div>
                     <div>
                        <img className="h-[350px] rounded-lg" src="https://i.ibb.co/N6S8rdd/BAN031-MD-13252.jpg" alt="" />
                        <h3 className="text-2xl font-bold my-3">Fast & easy financing</h3>
                     </div>
                  </div>

               </div>
            </div>
         </div>
      </div>
   );
};

export default WhyChoose;