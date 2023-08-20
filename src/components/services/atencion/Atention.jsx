import { useContext, useEffect } from "react";
import "./atencion.css";
import { ServicesContext } from "../../../context/services/servicesContext";
import { types } from "../../../context/services/servicesReducer";
import axios from "axios";

export const Atention = () => {
  const [state, dispatch] = useContext(ServicesContext);
  const addProduct=(service)=>{
    console.log(`${service.serviceName} agregado`)
  }

 useEffect(()=>{
  
  const fetchServices = async () => {
    try {
      const { data } = await axios.get(
        "https://diversos-consultora.onrender.com/services",
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    
      dispatch({
        type: types.setServicesState,
        payload: data.detail,
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: types.setError,
        payload: err,
      });
    }
  };

  fetchServices()
},[])
console.log(state?.services)

  return (
    <>
      <section className="products">
        <h2>Atención y Terapia psicologica</h2>
        {/* <p>{state.services}</p> */}
        <p>
          Nuestros servicios de atencion son muy variados y profesionales.
          Nuestros profesionales cuentan con los conocimientos para la necesidad
          que quiera.
        </p>
        <div className="articles">
          {state?.services.map((service)=>(
       
       <article key={service._id}>
            <img src="" alt="" />
            <h3>{service.serviceName}</h3>
            <p>descripcion</p>
            <p>{service.duration}</p>
            <div className="buy">
              <button onClick={addProduct(service)}>agregar</button>
            </div>
          </article>
          )

          )}
   
          <article>
            <img src="" alt="" />
            <h3>producto</h3>
            <p>descripcion</p>
            <p>duracion</p>
            <div className="buy">
              <button>agregar</button>
            </div>
          </article>
          <article>
            <img src="" alt="" />
            <h3>producto</h3>
            <p>descripcion</p>
            <p>duracion</p>
            <div className="buy">
              <button>agregar</button>
            </div>
          </article>
          <article>
            <img src="" alt="" />
            <h3>producto</h3>
            <p>descripcion</p>
            <p>duracion</p>
            <div className="buy">
              <button>agregar</button>
            </div>
          </article>
        </div>
      </section>
    </>
  );
};
