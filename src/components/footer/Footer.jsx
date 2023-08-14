// deberian ser Link o Navlink?

export const Footer = () => {
  return (
    <>
      <div className="bg-dark text-light d-flex justify-content-center">
        <div className="d-flex align-items-center w-50">
          <div className=" w-50">
            <h3>Nosotros</h3>
            <p>
              Somos una consultora que ofrece diversos servicios psicologicos,
              desde therapia individual o familiar, hasta coaching de vida y
              laboral. Que sea una sesion individual o un programa, nuestros
              profesionales sabran ayudarle
            </p>
          </div>
          <div className="w-50">
            <h3>Servicios</h3>
            <p>
              <a href="/TherapyPage">Therapia</a>
            </p>
            <p>
              <a href="/CapacitationPage">Capacitación</a>
            </p>
            <p>
              <a href="/CoachingPage">Coaching</a>
            </p>
            <p>
              <a href="/ProgramPage">Programas</a>
            </p>
          </div>
        </div>
        <div className="d-flex align-items-center">
          <div>
            <h3>Contacto</h3>
            <p>
              Nuestro Telefono : <span>123-456-7890</span>
            </p>
            <p>
              Nuestro Correo : <span>diversosconsultora@gmail.com</span>
            </p>
            <div className="icon d-flex justify-content-evenly">
              <a href="https://facebook.com">
                <i className="bi bi-facebook" />
              </a>
              <a href="https://whatsapp.com">
                <i className="bi bi-whatsapp" />
              </a>
              <a href="https://instagram.com">
                <i className="bi bi-instagram" />
              </a>
              <a href="https://twitter.com">
                <i className="bi bi-twitter" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-dark text-light text-center fs-6">
        <p>® All Rights Reserved vincentmayer1808</p>
      </div>
    </>
  );
};
