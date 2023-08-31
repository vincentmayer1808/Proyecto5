/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export const ServiceList = ({ therapie, coaching, program }) => {
  return (
    <>
      <div>
        <h3 className="text-center">Nuestros Servicios</h3>
        <div className="d-flex justify-content-evenly">
          <div>
            <h4>Atencion y Therapia</h4>
            <p>
              Necesitas therapia? que sea individual, de pareja o infantil,
              revise la variedades de therapia que ofrecemos
            </p>
            {therapie?.map((service) => (
              <div key={service._id}>
                <Link to={`/Service/${service.serviceName}`}>
                  {service.serviceName}
                </Link>
              </div>
            ))}
          </div>

          <div>
            <h4>Coaching de vida</h4>
            <p>
              Desarrolla sus habilidades y talentos con las varias sesiones de
              coaching, desde el coaching de vida hasta el coaching familiar.
            </p>
            {coaching?.map((service) => (
              <div key={service._id}>
                <Link to={`/Service/${service.serviceName}`}>
                  {service.serviceName}
                </Link>
              </div>
            ))}
          </div>

          <div>
            <h4>Programas</h4>
            <p>Revise los diferentes programas de 8 semanas que ofrecemos</p>
            {program?.map((service) => (
              <div key={service._id}>
                <Link to={`/Service/${service.serviceName}`}>
                  {service.serviceName}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
