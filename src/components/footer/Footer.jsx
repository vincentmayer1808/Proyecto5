// deberian ser Link o Navlink?

export const Footer = () => {
  return (
    <>
      <div className="bg-dark text-light d-sm-flex p-2">
        <div className="d-flex flex-column align-items-center justify-content-center text-center p-2 ">
          <h3>Nosotros</h3>
          <p >
            Somos psicologos calificados que ofrecen variedades de servicios de
            bien estar psicologico, desde la terapia hasta el coaching de vida,
            que sea sesiones individuales o programas grupales.
          </p>
        </div>
        <div className="text-center d-flex align-items-center justify-content-center mx-5">
          <div>
            <h3>Contacto</h3>
            <p>
              Telefono : <span>123-456-7890</span>
            </p>
            <p>psicologialosrios@gmail.com</p>
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
