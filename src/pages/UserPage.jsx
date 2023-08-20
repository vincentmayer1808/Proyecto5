import { Cart } from "../components/cart/Cart";
import { ServiceList } from "../components/services/servicelist/ServiceList";
import { User } from "../components/user/User";

export const UserPage = () => {
  return (
    <>
      <User />
      <Cart/>
      <ServiceList/>
    </>
  );
};
