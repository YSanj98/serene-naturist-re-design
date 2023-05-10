import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';

type serviceListProps = {
    image: string
    serviceTitle: string,
    description: string
}


const ServiceList = (props: serviceListProps) => {
  
  useEffect(()=> {
    AOS.init({duration: 1000});
  }, []);
  return (
    <div className="text-[#ffffff] card w-96 bg-primary-100 mb-5 outline outline-offset-2 outline-primary-100" data-aos="zoom-in">
        <figure className="px-10 pt-10">
            <img src={props.image} alt="Shaving image" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
            <h2 className="card-title">{props.serviceTitle}</h2>
            <p className="text-justify">{props.description}</p>
        </div>
    </div>
  )
}

export default ServiceList