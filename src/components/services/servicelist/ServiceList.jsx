/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export const ServiceList = ({ therapie, coaching, program }) => {
  return (
    <>
      <div className="text-center">
        <h3>Nuestros Servicios</h3>
        <div className="d-flex flex-column flex-sm-row justify-content-evenly p-2">
          <div>
            <h4>Terapia Psicológica</h4>
            <p>
              Encuentra un espacio de expresión para comprender y transformar
            </p>
            {therapie?.map((service) => (
              <div key={service._id}>
                <Link
                  to={`/Service/${service.serviceName}`}
                  className="text-decoration-none fs-5"
                >
                  {service.serviceName}
                </Link>
              </div>
            ))}
          </div>

          <div className="px-2">
            <h4>Coaching</h4>
            <p>Descubre la mejor versión de ti</p>
            {coaching?.map((service) => (
              <div key={service._id}>
                <Link
                  to={`/Service/${service.serviceName}`}
                  className="text-decoration-none fs-5"
                >
                  {service.serviceName}
                </Link>
              </div>
            ))}
          </div>

          <div>
            <h4>Programas</h4>
            <p>Programas online de 8 sesiones</p>
            {program?.map((service) => (
              <div key={service._id}>
                <Link
                  to={`/Service/${service.serviceName}`}
                  className="text-decoration-none fs-5"
                >
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
