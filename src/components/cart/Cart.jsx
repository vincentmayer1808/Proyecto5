import { useState, useEffect } from "react";
import { CartProduct } from "../cartProduct/CartProduct";

export const Cart = () => {
  const storedItems = JSON.parse(localStorage.getItem("cart"));
  const [cart, setCart] = useState(storedItems);
  const [totalPrice, setTotalPrice] = useState(0);

  const deleteCart = () => {
    setCart([]);
  };

  useEffect(() => {
    setTotalPrice(0);
    cart?.forEach((product) => {
      const priceToSum = product.price * product.quantity;
      setTotalPrice((price) => price + priceToSum);
    });
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <>
      <h2>Mi carrito de compras</h2>
      <ul>
        {cart?.map((product) => (
          <li key={product._id}>
            <CartProduct producto={product} setCart={setCart} />
            <button
              onClick={() => {
                if (
                  window.confirm(
                    "Estas seguro de eliminar este servicio del carrito?"
                  )
                )
                  setCart(
                    cart.filter((service) => service._id !== product._id)
                  );
              }}
            >
              eliminar
            </button>
          </li>
        ))}
      </ul>
      <h3>Precio total: {totalPrice}</h3>

      <button>Pagar</button>
      <button onClick={deleteCart}>Reiniciar carrito</button>
    </>
  );
};
