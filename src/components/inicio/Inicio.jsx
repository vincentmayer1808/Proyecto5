
import { useContext } from "react";
import { UserContext } from "../../context/user/userContext";



export const Inicio = () => {
  const [user,]=useContext(UserContext)
  return (
    <>
      <div>
        {(user)?(

         <div>
         { JSON.stringify(user, null, 2)}
         </div>
        ):(
         <div>
         <p>usuario no disponible</p>
         </div> 
        )
        }
        <h1>Inicio</h1>
        <p>
          Diversos Consultora es una consultora de psicologia en linea que
          ofrece servicios diversos, desde lo laboral hasta lo personal.
          Queremos hacer de este servicio remoto, un recurso accesible a todas
          las personas y empresas que desean crecer sin limitarse por la
          distancia. A base de la psicologia, ayudamos al desarrollo personal y
          organizacional con metodos aprobados que cuentan con tecnicas de
          diagnostico y de intervención basadas en datos cientificos. Nos
          especializamos en igualdad de genero, gestión de personas y desarrollo organizacional, 
          cambio, liderazgo y colaboración, clima y cultura, comunicación
          estratégica.
        </p>
      </div>
    </>
  );
};
