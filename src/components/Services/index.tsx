import { SelectedPage } from "@/shared/types";

type Props = {
  setSelectedPage: (Value: SelectedPage) => void;
}

const Service = (setSelectedPage: Props) => { 
  return (

    //mobile view service component
    <div className="mt-20">
        <h1 className="text-center text-2xl font-medium"> not just only therapy center </h1>
        <div className="flex justify-center items-center ">
          <div className="card w-96 bg-base-100">
            <figure className="px-10 pt-10">
              <img src="src/assets/images/img-massage.jpg" alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Massage</h2>
              <p className="text-justify">Our therapists are fully qualified Federation Members, who have trained in, 
                amongst other things, Swedish Body Massage and Aromatherapy, also Indian Head Massage and Reflexology. 
                full body, takes 2 hours plus, depending on exactly what is required.
                Hot stones and Infra red or Novasonic equipment can also be incorporated into the naturist massage at no extra cost
                </p>
            </div>
          </div>
        </div>
        

    </div>
  )
}

export default Service