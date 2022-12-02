import "./Register.css";
import logo from "../images/notes-logo.png";
import { useState } from "react";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  // useAuth me va a devolver el objeto signup de authContext
  const { signup } = useAuth();

  // useNavigate funcion'hook' para navegar
  const navigate = useNavigate();

  // defino un estado (variable) de error
  const [error, setError] = useState();

  // funcion para actualizar el estado
  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };
  // funcion para ver finalmente que tiene ese estado

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('') // hacerlo simple pero no entra al catch
    try {
      await signup(user.email, user.password);
      navigate("/Welcome");
    } catch (error) {
      console.log(error.code);
      if (error.code === "auth/internal-error") {
        setError("Correo invalido");
      }
    }
  };

  return (
    <div className="grid-register">
      <header className="login-header">
        <img src={logo} className="logo-login" alt="logo" />
      </header>

      <section className="body-login">
        <form onSubmit={handleSubmit}>
          <div className="inputs-login-div">
            <h2 className="create-count"> Create an account </h2>
            {error && <p>{error}</p>}
            <input
              className="userId, inputs-login"
              placeholder="Enter email"
              type="email"
              name="email"
              autoComplete="off"
              onChange={handleChange}
            ></input>
            <input
              className="password, inputs-login"
              placeholder="Enter password"
              type="password"
              name="password"
              onChange={handleChange}
            ></input>
          </div>
          <button className="btn-login" type="submit">
            Register
          </button>
        </form>
      </section>
    </div>
  );
}
