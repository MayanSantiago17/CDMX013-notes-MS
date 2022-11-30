import './Login.css'
import logo from '../images/notes-logo.png';
import { useState } from "react";
import { useAuth } from "../context/authContext";
import { Link, useNavigate } from "react-router-dom";


export default function Login () {

    const [user, setUser] = useState({
        email: "",
        password: "",
      });
    
      // useAuth me va a devolver el objeto signup de authContext
      const {login} = useAuth();
    
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
          await login(user.email, user.password);
          navigate("/Welcome");
        } catch (error) {
          console.log(error.code);
          if (error.code === "auth/internal-error") {
            setError("Correo invalido");
          }
        }
      };
    return (
        <div className="grid">
            <header className='login-header'>
                <img src={logo} className='logo-login' alt='logo'/>
            </header>
            <section className="body-login">
        <form onSubmit={handleSubmit}>
          <div className="inputs-login-div">
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
            Login
          </button>

          <p className='button-to-register'>Don`t have an Account? <Link to='/Register' className='b-to-Register'> Register </Link> </p>
        </form>
      </section>
        </div>
 );
}
// olvide hacer muchos commits