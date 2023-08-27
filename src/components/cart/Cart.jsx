import { useState, useEffect } from "react";
import { CartProduct } from "../cartProduct/CartProduct";

export const Cart = () => {
  const storedItems = JSON.parse(localStorage.getItem("cart"))
  // const initCart = [];
  const [cart, setCart] = useState(storedItems);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    setTotalPrice(0);
    cart?.forEach((product) => {
      const priceToSum = product.price * product.quantity;
      setTotalPrice((price) => price + priceToSum);
    });
  }, [cart]);

  return (
    <>
      <h2>Mi carrito de compras</h2>
      <ul>
        {cart?.map((product) => (
          <CartProduct key={product.id} producto={product} setCart={setCart} />
        ))}
      </ul>
      <h3>Precio total: {totalPrice}</h3>

      <button>Pagar</button>
    </>
  );
};