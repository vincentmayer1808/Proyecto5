import React, { useState } from "react";

export const Reservacion = () => {
  const initForm = {
    username: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    comment: "",
  };

  const [formState, setFormState] = useState(initForm);
  const { username, email, service, date } = formState;

  const onChangeForm = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (username == "" || email == "" || service == "" || date == "") {
      return window.alert(
        "Por favor, necesitamos su nombre, correo, servicio deseado y fecha"
      );
    } else {
      addToDB(formState);
      setFormState(initForm);
    }
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
              <label className="col-form-label mx-2" htmlFor="service">
                Que servicio requiere
              </label>
              <select
                className="form-select shadow"
                name="service"
                placeholder="Elige el servicio deseado"
                id="service"
                value={formState.service}
                onChange={onChangeForm}
              >
                <option value="">Elige el servicio deseado</option>
                <option value="consultora">consultora</option>
                <option value="capacitacion">capacitación</option>
                <option value="coaching">coaching</option>
                <option value="reclutamiento">reclutamiento</option>
                <option value="seleccion">selección</option>
                <option value="asesoria profesional">
                  asesoría profesional
                </option>
              </select>
            </div>
            <div className="form-group g-3">
              <label className="col-form-label mx-2" htmlFor="date">
                Date and Time
              </label>
              <input
                className="form-control shadow"
                name="date"
                placeholder="Elige la fecha y hora de su reservación"
                type="datetime-local"
                value={formState.date}
                onChange={onChangeForm}
              />
            </div>
            <div className="form-group g-3">
              <label className="col-form-label mx-2" htmlFor="comment">
                Consulta
              </label>
              <textarea
                name="comment"
                className="form-control shadow"
                rows="4"
                cols="50"
                placeholder="Consultanos sobre su reservación"
                value={formState.comment}
                onChange={onChangeForm}
              />
            </div>
            <button
              className="btn btn-primary d-grid col-6 mx-auto mt-2 shadow"
              type="submit"
              id="reservar"
              onClick={handleSubmit}
            >
              Reservar
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
