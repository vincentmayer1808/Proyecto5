import React, { useState } from "react";

export const Contact = () => {
  const initForm = {
    username: "",
    email: "",
    phone: "",
    consult: "",
  };

  const [formState, setFormState] = useState(initForm);

  const onChangeForm = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addToDB(formState);
    setFormState(initForm);
  };

  const addToDB = () => {
    console.log(formState);
  };

  return (
    <>
      <div className="container-fluid bg-light text-dark rounded">
        <div className="text-center">
          <h2>Reserva con nosotros</h2>
          <p>
            Reserva su consulta llenando este formulario, enviaremos un correo
            de confirmación a la dirección indicada.
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
              type="submit"
              id="contact"
              onClick={handleSubmit}
            >
              Envianos tu consulta
            </button>
          </form>
        </div>
      </div>
      <div>
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
            <span>Desde donde quieres</span>
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
