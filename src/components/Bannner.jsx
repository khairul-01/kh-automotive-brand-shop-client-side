

const Bannner = () => {
   return (
      <div>
         <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/0jRH6bG/23676.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
               <div className="max-w-md">
                  <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                  <p className="mb-5 text-4xl">Welcome to KH Automotive Website</p>
                  <button className="btn btn-primary">Get Registered</button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Bannner;