import axios from "axios";
import { useState } from "react";

export const Contact = () => {
  const initForm = {
    username: "",
    email: "",
    phone: "",
    consult: "",
  };

  const [formState, setFormState] = useState(initForm);
  const [isLoading, setIsLoading] = useState(false);
  const onChangeForm = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const spinner = document.getElementById("contactSpinner");
    spinner.classList.remove("visually-hidden");
    setIsLoading(true);
    const { username, consult, email } = formState;
    if (username === "" || email === "" || consult === "") {
      window.alert("Debe llenar los campos de nombre, correo y comsulta");
    } else {
      await addToDB(formState);
    }
    setIsLoading(false);
    spinner.classList.add("visually-hidden");
  };
  const addToDB = async () => {
    try {
      await axios.post(
        "http://localhost:5174/contact",
        formState,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      window.alert("Consulta Enviada");
    } catch (err) {
      console.log(err);
      window.alert("error al enviar la consulta");
    }
  };

  return (
    <>
      <div className="container-fluid bg-light text-dark rounded">
        <div className="text-center">
          <h2>Contactanos</h2>
          <p>
            Nos puedes contactar llenando este formulario o escribiendonos a la
            red social de tu preferencía.
          </p>
        </div>
        <div className="p-3">
          <form action="submit">
            <div className="form-group g-3 ">
              <label className="col-form-label mx-2" htmlFor="username">
                Nombre
              </label>
              <input
                className="form-control col-auto shadow"
                name="username"
                type="text"
                placeholder="Escribe su nombre aquí"
                value={formState.username}
                onChange={onChangeForm}
              />
            </div>
            <div className="form-group g-3 ">
              <label className="col-form-label mx-2" htmlFor="email">
                Dirección de correo
              </label>
              <input
                className="form-control shadow"
                name="email"
                placeholder="Escribe su correo aquí"
                type="email"
                value={formState.email}
                onChange={onChangeForm}
              />
            </div>
            <div className="form-group g-3 ">
              <label className="col-form-label mx-2" htmlFor="phone">
                Numero de telefono
              </label>
              <input
                className="form-control shadow"
                name="phone"
                placeholder="Escribe su numero de telefono"
                type="number"
                value={formState.phone}
                onChange={onChangeForm}
              />
            </div>
            <div className="form-group g-3">
              <label className="col-form-label mx-2" htmlFor="consult">
                Consulta lo que quiera
              </label>
              <textarea
                name="consult"
                className="form-control shadow"
                rows="4"
                cols="50"
                placeholder="Escribenos"
                value={formState.consult}
                onChange={onChangeForm}
              />
            </div>
            <button
              className="btn btn-primary d-grid col-6 mx-auto mt-2 shadow"
              id="contact"
              type="submit"
              onClick={handleSubmit}
              disabled={isLoading}
            >
              Envianos tu consulta
            </button>
            <div
              id="contactSpinner"
              className="visually-hidden d-flex justify-content-center text-primary mt-2"
            >
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div>
        <img src="../../assets/image/contact.jpg" alt="contacto" className="vw-100"/>
      </div>
      <div className="border border-dark rounded shadow text-center m-5 p-2">
        <h2>Nuestro Contacto</h2>
        <p>También nos puedes contactar por estos medios</p>
        <div>
          <p>
            <span>Telefono : </span>
            <span>123-456-7890</span>
          </p>
          <p>
            <span>Correo : </span>
            <span>diversosconsultora@gmail.com</span>
          </p>
          <p>
            <span>instagram : </span>
            <span>instagram.com/diversosconsultora</span>
          </p>
          <p>
            <span>Ubicación : </span>
            <span>Desde donde quieres, mientras tengas coneccion internet</span>
          </p>
        </div>
        <div className="icon d-flex justify-content-evenly mb-3">
          <a href="https://facebook.com">
            <i className="bi bi-facebook" />
          </a>
          <a href="https://whatsapp.com">
            <i className="bi bi-whatsapp" />
          </a>
          <a href="https://instagram.com">
            <i className="bi bi-instagram" />
          </a>
          <a href="https://twitter.com">
            <i className="bi bi-twitter" />
          </a>
        </div>
      </div>
    </>
  );
};
