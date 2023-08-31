/* eslint-disable react/prop-types */

import { Product } from "../components/services/product/Product"
import { ServiceList } from "../components/services/servicelist/ServiceList"

export const ServicePage = ({user, therapie, coaching, program}) => {

  return (
   <>
   
   <Product user={user}/>
   <ServiceList therapie={therapie} coaching={coaching} program={program}/>
   </>
  )
}
