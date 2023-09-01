/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

export const CartProduct = ({ producto, setCart, cart }) => {
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
      window.confirm("Estas seguro de eliminar este servicio del carrito?")
        ? setCart(cart.filter((service) => service._id !== producto._id))
        : (producto.quantity = 1);
      setCounter(1);
    } else if (counter >= 1) {
      setIsDisabled(false);
    }
  }, [counter]);

  return (
    <div className="container-fluid d-flex flex-column align-items-center">
      <h3>{producto.serviceName}</h3>
      <p>Precio Unitario: {producto.price}</p>
      <div className="d-flex justify-content-evenly">
        <button
          className="btn btn-warning shadow p-1"
          disabled={isDisabled}
          onClick={disminuir}
        >
          -1
        </button>
        <p className="border border-dark shadow p-1 px-3 m-1">{counter}</p>
        <button className="btn btn-primary shadow p-1" onClick={aumentar}>
          +1
        </button>
      </div>
      <p>TOTAL : {producto.price * producto.quantity}CLP</p>
    </div>
  );
};
