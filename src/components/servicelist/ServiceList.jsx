export const ServiceList = () => {
  return (
    <>
      <div>
        <h3 className="text-center">Nuestros Servicios</h3>
        <div className="d-flex justify-content-evenly">
          <div>
            <h4>Therapia</h4>
            <p>
              Necesitas therapia? que sea individual, de pareja o infantil,
              revise la variedades de therapia que ofrecemos
            </p>
            <a href="/TherapyPage">Ver Más</a>
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
              coaching, desde el coaching de vida hasta el coaching familiar.
            </p>
            <a href="/CoachingPage">Ver Más</a>
          </div>
          <div>
            <h4>Programas</h4>
            <p>
              Revise los diferentes programas de 8 semanas que ofrecemos
            </p>
            <a href="/ProgramPage">Ver Más</a>
          </div>
        </div>
      </div>
    </>
  );
};
