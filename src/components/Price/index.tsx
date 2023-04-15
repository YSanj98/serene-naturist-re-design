import { SelectedPage } from "@/shared/types";


type Props = {
    setSelectedPage: (Value: SelectedPage) => void;
}

const Price = (props: Props) => {
  return (
    <>
      <div className="flex justify-center bg-[#f9f9f1] pb-[50px] mt-20 md:hidden">
        <div className="carousel w-3/5 h-50 mt-20">

          <div id="slide1" className="carousel-item relative w-full">
            <img src="src/assets/images/img1-carousel.jpg" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">❮</a>
              <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
          </div>

          <div id="slide2" className="carousel-item relative w-full">
            <img src="src/assets/images/img2-carousel.jpg" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">❮</a>
              <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
          </div>

          <div id="slide3" className="carousel-item relative w-full">
            <img src="src/assets/images/img3-carousel.jpg" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">❮</a>
              <a href="#slide4" className="btn btn-circle">❯</a>
            </div>
          </div>

          <div id="slide4" className="carousel-item relative w-full">
            <img src="src/assets/images/img4-carousel.jpg" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">❮</a>
              <a href="#slide1" className="btn btn-circle">❯</a>
            </div>
          </div>

        </div>
      </div>
      
      <div className="bg-[#f9f9f1] w-full ">
        <h1 className="text-center text-2xl font-medium pt-10 pb-10">Prices</h1>
        <div className="grid justify-around gap-5 lg:grid-cols-3 md:grid-cols-1 pt-5">

          

        </div>
      </div>
    </>

  )
}

export default Price