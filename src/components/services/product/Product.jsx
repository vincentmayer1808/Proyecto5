/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Product = ({ user, state }) => {
  const param = useParams();
  const { type } = param;
  const [product, setProduct] = useState(null);
  const storedItems = JSON.parse(localStorage.getItem("cart")) || [];
  const [cart, setCart] = useState(storedItems);

  useEffect(() => {
    const service = state?.services?.find(
      (service) => service.serviceName === type
    );
    setProduct(service);
  }, [param]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <>
      <section className="d-flex flex-column flex-md-row justify-content-evenly align-items-center p-2">
        <div className="p-1">
          <img src={product?.image} alt="" className="img-fluid"/>
        </div>
        <div className="text-center border border-dark rounded shadow-lg p-3 m-2">
          <h2>{product?.serviceName}</h2>
          <p>{product?.largeDesc}</p>
          <div className="d-flex justify-content-around">
          <p>Precio : {product?.price}CLP</p>
          <p>Puede asistir hasta {product?.assisting} personas</p>
          <p>Duración : {product?.duration}</p>
          </div>
          {cart?.map((service) => service._id).includes(product?._id) ? (
            <button
             className="btn btn-danger"
              onClick={() =>
                setCart(cart.filter((service) => service._id !== product._id))
              }
            >
              eliminar del carro
            </button>
          ) : (
            <button
            className="btn btn-primary"
              onClick={() =>
                user?.user
                  ? setCart([...cart, { ...product, quantity: 1 }])
                  : window.alert(
                      "Necesitas iniciar sesión para poder agregar un producto al carrito"
                    )
              }
            >
              agregar al carro
            </button>
          )}
        </div>
      </section>
    </>
  );
};
