// deberian ser Link o Navlink?

export const Footer = () => {
  return (
    <>
      <div className="bg-dark text-light d-flex justify-content-center">
        <div className="d-flex align-items-center w-50">
          <div className=" w-50">
            <h3>Nosotros</h3>
            <p>
              Somos psicologos calificados que ofrecen variedades de servicios
              de bien estar psicologico, desde la terapia hasta el coaching de
              vida, que sea sesiones individuales o programas grupales.
            </p>
          </div>
          <div className="w-50">
            <h3>Servicios</h3>
            <p>
              <a href="/AtentionPage">Atencion y Terapia</a>
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
