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
    const service = state?.services?.find((service) => 
      service.serviceName === type
    );
    setProduct(service);
  }, [state]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <>
      <section>
        <h2>{product?.serviceName}</h2>
        <p>{product?.description}</p>
        <p>{product?.price}</p>
        <p>{product?.assisting}</p>
        <p>{product?.duration}</p>
        {cart?.map((service) => service._id).includes(product?._id) ? (
          <button
            onClick={() =>
              setCart(cart.filter((service) => service._id !== product._id))
            }
          >
            eliminar del carro
          </button>
        ) : (
          <button
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
      </section>
    </>
  );
};
