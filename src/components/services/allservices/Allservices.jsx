

export const Allservices = () => {
  return (
    <>
      <div className="d-flex container">
        <img src="../../../assets/image/servconsult.jpg" alt="servicio consulta" className="w-25"/>
        <h2>NUESTROS SERVICIOS</h2>
        <p>
          Revisa aquí los diferentes servicios que ofrecemos como consultora.
          Lee las descripciones de las principales categorias en cual puedemos ayudar, haga
          CLICK en la parte que le interesa para revisar los diferentes
          servicios personalisados de cada categorias.
        </p>
      </div>

   <div className="text-dark">
      <a href="/AtentionPage">
        <div className="d-flex container animate__animated animate__backInLeft">
          <div>
          <h3>ATENCION Y TERAPIA PSICOLOGICA</h3>
          <p>La atencion psicologica es la primera atencion que se le ofrece para dar un psicodiagnostico</p>
          </div>
          <img src="../../../assets/image/manosjuntas.jpg" alt="imagen a venir" className="w-25"/>
        </div>
      </a>
   
      <a href="/CoachingPage">
        <div className="d-flex container animate__animated animate__backInRight">
          <img src="../../../assets/image/coaching_employees.jpg" alt="coaching" className="w-25"/>
          <div>
          <h3>COACHING DE VIDA</h3>
          <p>Aqui vendra la descripcion del servicio</p>
          </div>
        </div>
      </a>
      
      <a href="/ProgramPage">
        <div className="d-flex container animate__animated animate__backInLeft">
          <div>
          <h3>PROGRAMAS</h3>
          <p>Las terapias mas efectivas necesitan de mas tiempo, consulta los diferentes programas de 8 sesiones de therapia que podrias necesitar</p>
          </div>
         <img src="" alt="" />
        </div>
      </a>
   </div>
    </>
  );
};
