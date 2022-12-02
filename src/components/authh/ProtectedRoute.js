import { Navigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

// Para componentes que quiero que esten protegidos si el usuario no esta autenticado
export function ProtectedRoute ({children}) {
    const {user, loading} = useAuth () 

    // si los datos estan cargando o la pagina el estado sera loading
    if (loading) return <h1>Loading</h1>

    // si existe el objeto user != null quiere decir que el usuario SI esta autenticado
    // si no esta el objeto user == null !user quiere decir que el usuario No esta autenticado

    if (!user) return <Navigate to = '/Login' />

    // si todo va bien el usuario esta loageado y puede continuar retornara el children destino 

    return <>{children}</>;

}