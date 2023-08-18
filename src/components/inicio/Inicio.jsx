import { useContext } from "react";
import { UserContext } from "../../context/user/userContext";

export const Inicio = () => {
  const [user] = useContext(UserContext);
  return (
    <>
      <div>
        {user ? (
          <div>{JSON.stringify(user, null, 2)}</div>
        ) : (
          <div>
            <p>usuario no disponible</p>
          </div>
        )}
        <h1>Inicio</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id eligendi
          earum voluptatem unde vel nulla labore laboriosam placeat, vitae, eos
          sunt, ducimus suscipit repellat animi. Obcaecati dolores a magnam
          dolore.
        </p>
      </div>
    </>
  );
};
