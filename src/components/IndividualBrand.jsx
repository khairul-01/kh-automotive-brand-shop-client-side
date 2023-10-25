

const IndividualBrand = () => {
   return (
      <div>
         <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
               <img src="https://i.ibb.co/8YhQ2jj/23399.jpg" className="w-full" />
               <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide4" className="btn btn-circle">❮</a>
                  <a href="#slide2" className="btn btn-circle">❯</a>
               </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
               <img src="https://i.ibb.co/hy5GhRG/31750.jpg" className="w-full" />
               <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide1" className="btn btn-circle">❮</a>
                  <a href="#slide3" className="btn btn-circle">❯</a>
               </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
               <img src="https://i.ibb.co/n7j6Mjv/BMW-i5-review.jpg" className="w-full" />
               <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide2" className="btn btn-circle">❮</a>
                  <a href="#slide4" className="btn btn-circle">❯</a>
               </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
               <img src="https://i.ibb.co/Fbcntt2/2018-Tesla-Model-S-75-D.jpg" className="w-full" />
               <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide3" className="btn btn-circle">❮</a>
                  <a href="#slide1" className="btn btn-circle">❯</a>
               </div>
            </div>
         </div>
      </div>
   );
};

export default IndividualBrand;