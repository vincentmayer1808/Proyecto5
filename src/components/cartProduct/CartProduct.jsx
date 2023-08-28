/* eslint-disable react/prop-types */
import {  useState } from "react";

export const CartProduct = ({ producto, setCart}) => {
  const [contador, setContador] = useState(producto.quantity);

  const aumentar = () => {
    setCart((products) => {
      const productsArray = products.map((product) => {
        if (product._id === producto._id) {
          return { ...product, quantity: contador + 1 };
        } else {
          return product;
        }
      });
      return productsArray;
    });
    setContador(contador + 1);
  };

  const disminuir = () => {
    setCart((products) => {
      const productsArray = products.map((product) => {
        if (product._id === producto._id) {
          return { ...product, quantity: contador - 1 };
        } else {
          return product;
        }
      });
      return productsArray;
    });
    setContador(contador - 1);
  };

  return (
    <div>
      <h3>{producto.price}</h3>
      <p>{producto.serviceName}</p>
      <button onClick={disminuir}>-1</button>
      <p>{contador}</p>
      <button onClick={aumentar}>+1</button>
      <p>Precio total producto: {producto.price * producto.quantity}</p>
    </div>
  );
};
