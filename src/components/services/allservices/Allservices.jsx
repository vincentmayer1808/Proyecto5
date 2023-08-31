/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

import "./serviceCard.css";

export const Allservices = ({therapie, coaching, program}) => {

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
          <div  className="d-flex container animate__animated animate__backInLeft">
            <div>
              <h3 >ATENCION Y TERAPIA PSICOLOGICA</h3>
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
