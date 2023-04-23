type Props = {
    title: String,
    item1: String,
    item1price: String,
    item2: String,
    item2price: String,
    item3: String,
    item3price: String,
    item4: String,
    item4price: String,
}

const PriceList = (props: Props) => {
  return ( 
      <div className="flex flex-col p-4 mt-4 bg-white border border-primary-100 rounded-lg shadow sm:p-8 cursor-pointer transition-all ease-in-out duration-500 hover:bg-inherit hover:-translate-y-1 hover:scale-110">
        <h5 className="text-center text-xl pb-5 font-bold leading-none text-gray-900">{props.title}</h5>
       
        <div className="flow-root">
              <ul role="list" className="divide-y divide-primary-100">
                  <li className="py-3 sm:py-4">
                      <div className="flex items-center space-x-8">
                          <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-gray-900 truncate">
                                  {props.item1}
                              </p>
                          </div>
                          <div className="inline-flex items-center text-base font-semibold text-gray-900">
                              {props.item1price}
                          </div>
                      </div>
                  </li>
                  <li className="py-3 sm:py-4">
                      <div className="flex items-center space-x-4">
                          <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-gray-900 truncate">
                                {props.item2}     
                              </p>
                          </div>
                          <div className="inline-flex items-center text-base font-semibold text-gray-900">
                              {props.item2price}
                          </div>
                      </div>
                  </li>
                  <li className="py-3 sm:py-4">
                      <div className="flex items-center space-x-4">
                          <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-gray-900 truncate">
                                  {props.item3}
                              </p>
                          </div>
                          <div className="inline-flex items-center text-base font-semibold text-gray-900">
                              {props.item3price}
                          </div>
                      </div>
                  </li>
                  <li className="py-3 sm:py-4">
                      <div className="flex items-center space-x-4">
                          <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-gray-900 truncate">
                                  {props.item4}
                              </p>
                          </div>
                          <div className="inline-flex items-center text-base font-semibold text-gray-900">
                              {props.item4price}
                          </div>
                      </div>
                  </li>
              </ul>
        </div>
      </div>
  )
}

export default PriceList