import { useTheme } from "../Route/ThemeProvider";


const About = () => {
   const { isDarkMode } = useTheme();
   return (
      <div>
         <div className={isDarkMode ? 'dark-mode hero h-[450px] bg-base-200 my-9' : 'light-mode hero h-[450px] bg-base-200 my-9'}>
            <div className="flex flex-col md:flex-row gap-5 items-center mb-5">
               <div className="md:w-1/2 w-full">
                  <img src="https://i.ibb.co/L9W1y2Z/istockphoto-1388358989-612x612.jpg" className="h-[400px] w-full rounded-lg shadow-2xl" />
               </div>

               <div className="md:w-1/2 w-full">
                  <h1 className="text-5xl font-bold">About Us</h1>
                  <p className="py-6 text-2xl">We have lot of brand new collection. We provide high quality service.</p>

               </div>
            </div>
         </div>
      </div>
   );
};

export default About;