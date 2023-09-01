import { useState, useEffect } from "react";
import { CartProduct } from "../cartProduct/CartProduct";
import axios from "axios";

export const Cart = () => {
  const storedItems = JSON.parse(localStorage.getItem("cart"));
  const [cart, setCart] = useState(storedItems);
  const [totalPrice, setTotalPrice] = useState(0);

  const deleteCart = () => {
    if (window.confirm("Estas seguro de eliminar el carrito?")) setCart([]);
  };
  const buying = async () => {
    const itemsArray=[]
   cart.map((product)=>{
   const item={ 
    title:`${product.serviceName}`,
    unit_price: product.price,
    currency_id:"CLP",
    quantity: product.quantity
   }
   itemsArray.push(item)
  })
 
    const paymentURL = "http://localhost:5174/payment/create-payment";
    try {
      const { data } = await axios.post(paymentURL, itemsArray,{
        headers: {
          "Content-Type": "application/json",
        },
      });
      const init_point = data.detail.response.init_point;
      window.location.href = init_point;
    } catch (error) {
      console.log(error);
    }
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
      <div className="container-fluid text-center">
        <h3>Mi carrito de compras</h3>
        <ul className="d-flex flex-column flex-md-row justify-content-evenly align-items-center p-1">
          {cart?.map((product) => (
            <li className="list-group-item w-50 border border-dark rounded shadow p-2 m-1" key={product._id}>
              <CartProduct producto={product} setCart={setCart} cart={cart} />
              <button
                className="btn btn-danger"
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

        <button className="btn btn-primary m-1" onClick={buying}>
          Pagar
        </button>
        <button className="btn btn-danger m-1" onClick={deleteCart}>
          Reiniciar carrito
        </button>
      </div>
      <p className="text-center text-danger">¡IMPORTANTE! Para agendar su hora primero debe pagar</p>
    </>
  );
};
