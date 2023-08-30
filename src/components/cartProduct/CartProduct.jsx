/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

export const CartProduct = ({ producto, setCart }) => {
  const [counter, setCounter] = useState(producto.quantity);
  const [isDisabled, setIsDisabled] = useState(false);

  const aumentar = () => {
    setCart((products) => {
      const productsArray = products.map((product) => {
        if (product._id === producto._id) {
          return { ...product, quantity: counter + 1 };
        } else {
          return product;
        }
      });
      return productsArray;
    });
    setCounter(counter + 1);
  };

  const disminuir = () => {
    setCart((products) => {
      const productsArray = products.map((product) => {
        if (product._id === producto._id) {
          return { ...product, quantity: counter - 1 };
        } else {
          return product;
        }
      });
      return productsArray;
    });
    setCounter(counter - 1);
  };

  useEffect(() => {
    if (counter <= 0) {
      setIsDisabled(true);
    } else if (counter >= 1) {
      setIsDisabled(false);
    }
  }, [counter]);

  return (
    <div>
      <h3>{producto.price}</h3>
      <p>{producto.serviceName}</p>
      <button disabled={isDisabled} onClick={disminuir}>
        -1
      </button>
      <p>{counter}</p>
      <button onClick={aumentar}>+1</button>
      <p>Precio total producto: {producto.price * producto.quantity}</p>
    </div>
  );
};
