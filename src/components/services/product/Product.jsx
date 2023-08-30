import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Product = () => {
  const param = useParams();
  const { type } = param;
  const [product, setProduct] = useState(null);
  const storedItems = JSON.parse(localStorage.getItem("cart")) || [];
  const [cart, setCart] = useState(storedItems);

  useEffect(() => {
    const fetchService = async () => {
      try {
        const { data } = await axios.get(
          `https://diversos-consultora.onrender.com/services/${type}`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        setProduct(data.detail);
      } catch (err) {
        console.log(err);
      }
    };
    fetchService();
  }, []);

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
            onClick={() => setCart([...cart, { ...product, quantity: 1 }])}
          >
            agregar al carro
          </button>
        )}
      </section>
    </>
  );
};
