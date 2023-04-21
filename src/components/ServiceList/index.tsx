type serviceListProps = {
    image: string
    serviceTitle: string,
    description: string
}

const ServiceList = (props: serviceListProps) => {
  return (
    <div className="text-[#ffffff] card w-96 bg-primary-100 mb-5">
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