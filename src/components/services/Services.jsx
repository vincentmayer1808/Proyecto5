

export const Services = () => {
  return (
    <>
      <div className="d-flex container">
        <img src="../../assets/image/servconsult.jpg" alt="servicio consulta" className="w-25"/>
        <h2>NUESTROS SERVICIOS</h2>
        <p>
          Revisa aquí los diferentes servicios que ofrecemos como consultora.
          Lee las descripciones de las principales categorias en cual puedemos ayudar, haga
          CLICK en la parte que le interesa para revisar los diferentes
          servicios personalisados de cada categorias.
        </p>
      </div>
      <a href="/TherapyPage">
        <div className="d-flex container text-dark animate__animated animate__backInLeft">
          <div>
          <h3>TERAPIA</h3>
          <p>Que sean individual, familiar o de pareja, tenemos una gran variedad de terapias disponibles, consulta aqui los diferentes servicios que ofrecemos </p>
          </div>
          <img src="../../assets/image/manosjuntas.jpg" alt="consultora" className="w-25"/>
        </div>
      </a>
      <a href="/CoachingPage">
        <div className="d-flex container animate__animated animate__backInRight">
          <img src="../../assets/image/coaching_employees.jpg" alt="coaching" className="w-25"/>
          <div>
          <h3>COACHING</h3>
          <p>Aqui vendra la descripcion del servicio</p>
          </div>
        </div>
      </a>
      <a href="/CapacitationPage">
        <div className="d-flex container animate__animated animate__backInLeft">
          <div>
          <h3>CAPACITACION</h3>
          <p>Aqui vendra la descripcion del servicio</p>
          </div>
          <img src="../../assets/image/desarrolloOrg.jpg" alt="capacitacion" className="w-25"/>
        </div>
      </a>
  
      <a href="/ProgramPage">
        <div className="d-flex container animate__animated animate__backInRight">
          <div>
          <h3>Programas</h3>
          <p>Las terapias mas efectivas necesitan de mas tiempo, consulta los diferentes programas de 8 sesiones de therapia que podrias necesitar</p>
          </div>
         <img src="" alt="" />
        </div>
      </a>
    </>
  );
};
