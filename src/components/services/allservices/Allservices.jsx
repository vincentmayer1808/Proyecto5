import { useContext, useEffect, useState } from "react";
import { ServicesContext } from "../../../context/services/servicesContext";
import { Link } from "react-router-dom";
import { types } from "../../../context/services/servicesReducer";

import "./serviceCard.css";
import axios from "axios";
// import { FetchServices } from "../../../helpers/FetchServices";

export const Allservices = () => {
  const [state, dispatch] = useContext(ServicesContext);
  const[therapie, setTherapie] = useState([])
  const[coaching, setCoaching] = useState([])
  const[program, setProgram] = useState([])
console.log(state)

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const { data } = await axios.get(
          "https://diversos-consultora.onrender.com/services",
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        dispatch({
          type: types.setServicesState,
          payload: data.detail,
        });
      
      } catch (err) {
        console.log(err);
        dispatch({
          type: types.setError,
          payload: err,
        });
      }
    };

    fetchServices();

    // FetchServices(url).then(dispatch);
  }, []);
useEffect(()=>{
  setTherapie(  state?.services?.filter(
    (service) => service.categorie === "terapia"
  ))
  
  setCoaching( state?.services?.filter(
    (service) => service.categorie === "coaching"
  ))
  setProgram(state?.services?.filter(
    (service) => service.categorie === "programa"
  ))
},[state])
  return (
    <>
      <div className="d-flex container">
        <img
          src="../../../assets/image/servconsult.jpg"
          alt="servicio consulta"
          className="w-25"
        />
        <h2>NUESTROS SERVICIOS</h2>
        <p>
          Revisa aquí los diferentes servicios que ofrecemos como consultora.
          Lee las descripciones de las principales categorias en cual puedemos
          ayudar, haga CLICK en la parte que le interesa para revisar los
          diferentes servicios personalisados de cada categorias.
        </p>
      </div>

      <div className="text-dark">
        <section className="products">
          <div className="d-flex container animate__animated animate__backInLeft">
            <div>
              <h3 id="therapie">ATENCION Y TERAPIA PSICOLOGICA</h3>
              <p>
                La atencion psicologica es la primera atencion que se le ofrece
                para dar un psicodiagnostico
              </p>
            </div>
            <img
              src="../../../assets/image/manosjuntas.jpg"
              alt="imagen a venir"
              className="w-25"
            />
          </div>
          <div className="articles">
            {therapie?.map((service) => (
              <Link key={service._id} to={`/Service/${service.serviceName}`}>
                <article className="animate__animated animate__backInLeft">
                  <img src={service.image} alt="" />
                  <h3>{service.serviceName}</h3>
                  <p>{service.description}</p>
                  <p>{service.duration}</p>
                  <p>{service.price}CLP</p>
                </article>
              </Link>
            ))}
          </div>

          <div className="d-flex container animate__animated animate__backInRight">
            <img
              src="../../../assets/image/coaching_employees.jpg"
              alt="coaching"
              className="w-25"
            />
            <div>
              <h3 id="coaching">COACHING DE VIDA</h3>
              <p>Aqui vendra la descripcion del servicio</p>
            </div>
          </div>
          <div className="articles">
            {coaching?.map((service) => (
              <Link key={service._id} to={`/Service/${service.serviceName}`}>
                <article className="animate__animated animate__backInRight">
                  <img src={service.image} alt="" />
                  <h3>{service.serviceName}</h3>
                  <p>{service.description}</p>
                  <p>{service.duration}</p>
                  <p>{service.price}CLP</p>
                </article>
              </Link>
            ))}
          </div>

          <div className="d-flex container animate__animated animate__backInLeft">
            <div>
              <h3 id="program">PROGRAMAS</h3>
              <p>
                Las terapias mas efectivas necesitan de mas tiempo, consulta los
                diferentes programas de 8 sesiones de therapia que podrias
                necesitar
              </p>
            </div>
            <img src="" alt="" />
          </div>
          <div className="articles">
            {program?.map((service) => (
              <Link key={service._id} to={`/Service/${service.serviceName}`}>
                <article className="animate__animated animate__backInLeft">
                  <img src={service.image} alt="" />
                  <h3>{service.serviceName}</h3>
                  <p>{service.description}</p>
                  <p>{service.duration}</p>
                  <p>{service.price}CLP</p>
                </article>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};
