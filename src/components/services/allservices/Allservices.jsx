/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

import "./serviceCard.css";

export const Allservices = ({ therapie, coaching, program }) => {
  return (
    <>
      <div className="d-flex flex-column flex-sm-row container-fluid">
        <div className="d-flex justify-content-center">
          <img
            src="../../../assets/image/lakeHerb.png"
            alt="lago con yerbas"
            className="px-2 w-50"
          />
        </div>
        <div className="text-center d-flex flex-column justify-content-center">
          <h2>NUESTROS SERVICIOS ONLINE</h2>
          <p>
            Queremos brindarte un espacio seguro y confidencial para encontrar
            bienestar y mejorar tu calidad de vida. Contamos con profesionales
            con experiencia, conocimientos y herramientas que te acompañarán
            durante tu proceso de transformación.
          </p>
        </div>
      </div>
      <div className="">
        <section className="products">
          <div className=" background d-flex flex-column flex-sm-row align-items-center animate__animated animate__backInLeft">
            <div className="text-center p-2">
              <h3>TERAPIA PSICOLÓGICA</h3>
              <p>
                El objetivo de la terapia psicológica o de los tratamientos
                psicológicos consiste en que la persona que busca ayuda, ponga
                en práctica formas eficaces de solucionar, afrontar, manejar,
                superar o prevenir aquellos problemas psicológicos o situaciones
                problemáticas y dificultades,
              </p>
            </div>
            <div>
              <img
                src="../../../assets/image/terapia.png"
                alt="terapiaOnline"
              />
            </div>
          </div>
          <div className="articles">
            {therapie?.map((service) => (
              <Link key={service._id} to={`/Service/${service.serviceName}`}>
                <article className="text-dark text-decoration-none animate__animated animate__backInLeft">
                  <img src={service.image} alt="" />
                  <h4>{service.serviceName}</h4>
                  <p>{service.description}</p>
                  <p>Duración : {service.duration}</p>
                  <p>Precio : {service.price}CLP</p>
                </article>
              </Link>
            ))}
          </div>

          <div className="background d-flex flex-column flex-sm-row align-items-center animate__animated animate__backInRight">
            <div>
              <img
                src="../../../assets/image/coaching.png"
                alt="coaching"
              />
            </div>
            <div className="text-center p-2">
              <h3 id="coaching">COACHING</h3>
              <p>
                Coaching es un proceso de acompañamiento reflexivo y creativo, a
                través del cual un profesional debidamente capacitado, acompaña
                a sus clientes a conseguir sus objetivos.
              </p>
            </div>
          </div>
          <div className="articles">
            {coaching?.map((service) => (
              <Link key={service._id} to={`/Service/${service.serviceName}`}>
                <article className="animate__animated animate__backInRight">
                  <img src={service.image} alt="" />
                  <h4>{service.serviceName}</h4>
                  <p>{service.description}</p>
                  <p>Duración : {service.duration}</p>
                  <p>Precio : {service.price}CLP</p>
                </article>
              </Link>
            ))}
          </div>

          <div className="background d-flex flex-column flex-sm-row align-items-center animate__animated animate__backInLeft">
            <div className="text-center p-2">
              <h3 id="program">PROGRAMAS</h3>
              <p>
                Las terapias mas efectivas necesitan de mas tiempo, consulta los
                diferentes programas de 8 sesiones de therapia que podrias
                agendar.
              </p>
            </div>
            <div>
              <img
                src="../../../assets/image/programa.png"
                alt="programas online"
              />
            </div>
          </div>
          <div className="articles">
            {program?.map((service) => (
              <Link key={service._id} to={`/Service/${service.serviceName}`}>
                <article className="animate__animated animate__backInLeft">
                  <img src={service.image} alt="" />
                  <h4>{service.serviceName}</h4>
                  <p>{service.description}</p>
                  <p>Duración : {service.duration}</p>
                  <p>Precio : {service.price}CLP</p>
                </article>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};
