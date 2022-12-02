// import { useNavigate } from 'react-router-dom';
import "../styles/Welcome.css";
import "../styles/grid.css";
import "../styles/navBarNotes.css";
// import { useAuth } from "../context/authContext";
import Navbar from "./NavBar";


export default function Welcome() {
  /*  
  // con esto accedo al objeto onAuthStateChanged para corroborar que este logeado y extraer lo que necesite como el email
  const { user, logout, loading } = useAuth();
  // const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    // navigate('/Login');
  };
  // antes de que retornes mientras esta cargando si loading == true regresame un texto que diga cargando
  if (loading) return <h1> Loading </h1>;
*/
  return (
    
    <div className="grid">
        
        <div className="navBarNotes">
            <Navbar/>
        </div>
        
      
      
    </div>
    
  );
}
