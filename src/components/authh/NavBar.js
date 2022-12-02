// import { useNavigate } from 'react-router-dom';

import { NavLink } from "react-router-dom";
import "../styles/Welcome.css";
import "../styles/grid.css";
import "../styles/navBarNotes.css";
import { useAuth } from "../context/authContext";
import create from '../images/Create.png';
import del from '../images/Delete.png';
import home from '../images/home.png';
import logOut from '../images/Logout.png';


export default function Navbar() {
    
  // con esto accedo al objeto onAuthStateChanged para corroborar que este logeado y extraer lo que necesite como el email
  const { user, logout, loading } = useAuth();
  // const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    // navigate('/Login');
  };
  // antes de que retornes mientras esta cargando si loading == true regresame un texto que diga cargando
  if (loading) return <h1> Loading </h1>;

  return (
    
    <div >
        <header className='welcome-header'>
            <h1 className="welcome-user">Welcome {user.email} </h1>
        </header>
        <section className="body-home">
        <nav className="nav-bar-notes">
            <div className="navbar-notes-container">
            <NavLink
                to="/create"
                activeclassname="active"
                className="notes-c-d notes-link"
            > <img src={create} className='create-notes' alt="create" />
            </NavLink>
            <NavLink
                to="/delete"
                activeclassname="active"
                className="notes-c-d notes-link"
                
            > <img src={del} className='delete-notes' alt="del" />
            </NavLink>
            <NavLink
                to="/Welcome"
                activeclassname="active"
                className="notes-state notes-link"
            > <img src={home} className='home-notes' alt="home" />
            </NavLink>
            <NavLink
                to="/Login"
                activeclassname="active"
                className="notes-state notes-link"
            > <img src={logOut} onClick={handleLogout} type="submit" className='home-notes' alt="logOut" />
            </NavLink>
            </div>
        </nav>
        </section>
      
      
    </div>
    
  );
}
