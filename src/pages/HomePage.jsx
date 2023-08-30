/* eslint-disable react/prop-types */
import { Inicio } from "../components/inicio/Inicio";
import { ServiceList } from "../components/services/servicelist/ServiceList";

export const HomePage = ({therapie, coaching, program}) => {
  
  return (
    <>
      <Inicio />
      <ServiceList  therapie={therapie} coaching={coaching} program={program}/>
    </>
  );
};
