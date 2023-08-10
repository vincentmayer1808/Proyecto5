export const ServiceList = () => {
  return (
    <>
      <div>
        <h3 className="text-center">Nuestros Servicios</h3>
        <div className="d-flex justify-content-evenly">
          <div>
            <h4>Consultora</h4>
            <p>
              Consultora psicolaboral y organizacional, revise los diferentes
              servicios de consultora que ofrecemos
            </p>
            <a href="/ConsultorPage">Ver Más</a>
          </div>
          <div>
            <h4>Capacitación</h4>
            <p>
              Capacita laboralmente al personal de su organizacion con tecnicas
              basadas en la communicacion y el buen trato laboral
            </p>
            <a href="/CapacitationPage">Ver Más</a>
          </div>
          <div>
            <h4>Coaching</h4>
            <p>
              Desarolla sus habilidades y talentos con las varias sesiones de
              coaching, desde los tipos de liderazgos hasta el desarrollo
              personal
            </p>
            <a href="/CoachingPage">Ver Más</a>
          </div>
          <div>
            <h4>Reclutamiento y Selección</h4>
            <p>
              Sabemas de los diferentes servicios de reclutamiento y seleccion
              de personal sin olvidar la atraccion de talentos
            </p>
            <a href="/ReclutPage">Ver Más</a>
          </div>
          <div>
            <h4>Asesoría Laboral</h4>
            <p>
              Preparase para su nuevo cargo con asesorías personales sobre la
              elaboración de CV, simulador de entrevistas y muchos mas recursos
            </p>
            <a href="/AsesoryPage">Ver Más</a>
          </div>
        </div>
      </div>
    </>
  );
};
