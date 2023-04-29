import { SelectedPage } from "@/shared/types";
import PriceList from "../PriceList";
import priceData from "@/shared/priceData";
import img1carousel from "@/assets/images/img1-carousel.jpg"
import img2carousel from "@/assets/images/img2-carousel.jpg"
import img3carousel from "@/assets/images/img3-carousel.jpg"
import img4carousel from "@/assets/images/img4-carousel.jpg"

type Props = {
    setSelectedPage: (Value: SelectedPage) => void;
}


const Price = (props: Props) => {
  return (
    <>
      <div className="flex justify-center bg-[#f9f9f1] pb-[50px] mt-20">
        <div className="carousel w-3/5 h-50 mt-20">

          <div id="slide1" className="carousel-item relative w-full">
            <img src={img1carousel} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">❮</a>
              <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
          </div>

          <div id="slide2" className="carousel-item relative w-full">
            <img src={img2carousel} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">❮</a>
              <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
          </div>

          <div id="slide3" className="carousel-item relative w-full">
            <img src={img3carousel} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">❮</a>
              <a href="#slide4" className="btn btn-circle">❯</a>
            </div>
          </div>

          <div id="slide4" className="carousel-item relative w-full">
            <img src={img4carousel} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">❮</a>
              <a href="#slide1" className="btn btn-circle">❯</a>
            </div>
          </div>

        </div>
      </div>

      <div className="bg-[#f9f9f1] w-full">
        <h1 className="text-center text-2xl font-medium pt-10 pb-10 underline">Prices</h1>
        <div className="grid place-items-center md:grid-rows-3 gap-5 lg:grid-cols-3 md:grid-cols-1 pt-5 pb-10">
          {priceData?.map(({title, item1, item1price, item2, item2price, item3, item3price, item4, item4price}, index) => {
            return <PriceList key={index} 
                              title={title} 
                              item1={item1} 
                              item1price={item1price} 
                              item2={item2} 
                              item2price={item2price} 
                              item3={item3} 
                              item3price={item3price} 
                              item4={item4} 
                              item4price={item4price} 
                               />
          })}
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#f9f9f1" fill-opacity="1" d="M0,256L34.3,213.3C68.6,171,137,85,206,90.7C274.3,96,343,192,411,202.7C480,213,549,139,617,122.7C685.7,107,754,149,823,160C891.4,171,960,149,1029,138.7C1097.1,128,1166,128,1234,149.3C1302.9,171,1371,213,1406,234.7L1440,256L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path>
      </svg>
    </>

  )
}

export default Price