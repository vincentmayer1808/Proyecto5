/* eslint-disable react/prop-types */
import { Allservices } from "../components/services/allservices/Allservices";

export const ServicesPage = ({therapie, coaching, program}) => {
  return (
    <>
      <Allservices  therapie={therapie} coaching={coaching} program={program}/>
    </>
  );
};
