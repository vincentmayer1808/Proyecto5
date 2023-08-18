export const ServiceList = () => {
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
            <a href="/AtentionPage">Ver Más</a>
          </div>
      
          <div>
            <h4>Coaching de vida</h4>
            <p>
              Desarrolla sus habilidades y talentos con las varias sesiones de
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
