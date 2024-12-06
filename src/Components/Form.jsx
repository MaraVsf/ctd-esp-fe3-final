import { useState } from "react";
import CardVerificar from "./CardVerificar";

const Form = () => {
  const [usuario, setUsuario] = useState({
    nombre: "",
    email: "",
  });
  console.log(usuario);

  const [mostrar, setMostrar] = useState(false);

  const [error, setError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (
      usuario.nombre.trim().length > 5 &&
      usuario.nombre.includes(" ") &&
      regexEmail.test(usuario.email)
    ) {
      setMostrar(true);
      setError(false);
    } else {
      setError(true);
      setMostrar(false);
    }
  };

  return (
    <div className="contact-form-container">
      <form onSubmit={handleSubmit}>
        <label>Nombre completo: </label>
        <input
          type="text"
          onChange={(event) =>
            setUsuario({ ...usuario, nombre: event.target.value })
          }
        />
        <label>Email: </label>
        <input
          type="email"
          onChange={(event) =>
            setUsuario({ ...usuario, email: event.target.value })
          }
        />
        <button>Enviar</button>
        {error && <h4>Por favor verifique su información nuevamente</h4>}

        {mostrar ? <CardVerificar usuario={usuario} /> : null}
      </form>
    </div>
  );
};

export default Form;
