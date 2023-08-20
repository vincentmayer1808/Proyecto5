import { useState, useEffect } from "react";
import { CartProduct } from "../cartProduct/CartProduct";
const initCart = [
  {
    title: "Producto 1",
    price: 100,
    quantity: 1,
    id: 1,
  },
  {
    title: "Producto 2",
    price: 200,
    quantity: 2,
    id: 2,
  },
  {
    title: "Producto 3",
    price: 150,
    quantity: 1,
    id: 3,
  },
];

export const Cart = () => {
  // const initCart = [];
  const [cart, setCart] = useState(initCart);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    setTotalPrice(0);
    cart.forEach((product) => {
      const priceToSum = product.price * product.quantity;
      setTotalPrice((price) => price + priceToSum);
    });
  }, [cart]);

  return (
    <>
      <h2>Mi carrito de compras</h2>
      <ul>
        {cart.map((product) => (
          <CartProduct key={product.id} producto={product} setCart={setCart} />
        ))}
      </ul>
      <h3>Precio total: {totalPrice}</h3>

      <button>Pagar</button>
    </>
  );
};
