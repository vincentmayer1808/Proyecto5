/* eslint-disable react/prop-types */
import { Register } from "../components/register/Register"
import { ServiceList } from "../components/services/servicelist/ServiceList"


export const RegisterPage = ({therapie, coaching, program}) => {
  return (
   <>
   <Register/>
   <ServiceList  therapie={therapie} coaching={coaching} program={program}/>
   </>
  )
}
