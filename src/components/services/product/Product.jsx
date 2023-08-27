
import axios from "axios";
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { types } from "../../../context/services/servicesReducer";
import { ServicesContext } from "../../../context/services/servicesContext";

export const Product = () => {
  const [state, dispatch] = useContext(ServicesContext);
  const param = useParams();
  const { type } = param;

  // const storedItems = JSON.parse(localStorage.getItem("cart")) || [];

  // const [cart, setCart] = useState(storedItems);

  // const addProduct = (service) => {
  //   setCart([...cart, service]);
  // };

  useEffect(() => {
    const fetchService = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:5174/services/${type}`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        dispatch({
          type: types.setServiceState,
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

    fetchService();
    console.log(state);
    // FetchServices();
  }, []);

  // useEffect(() => {
  //   localStorage.setItem("cart", JSON.stringify(cart));
  // }, [cart]);

  return (
    <>
      <section>
        <h2>{state?.service.serviceName}</h2>
        <p>{state?.service.description}</p>
        <p>{state?.service.price}</p>
        <p>{state?.service.assisting}</p>
        <p>{state?.service.duration}</p>
        <img src={state?.service.image} alt="" />
        {/* <button onClick={addProduct(state?.service)}>agregar al carro</button> */}
      </section>
    </>
  );
};
