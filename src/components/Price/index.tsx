import { SelectedPage } from "@/shared/types";


type Props = {
    setSelectedPage: (Value: SelectedPage) => void;
}

const Price = (props: Props) => {
  return (
    <div className="flex justify-center myclip bg-[#f9f9f1] pb-[400px] mt-20">
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

  )
}

export default Price