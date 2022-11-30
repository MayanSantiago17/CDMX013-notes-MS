import { createContext, useContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import { auth } from '../../firebase/config'


export const authContext = createContext(); //ejecutando createContext el cual devuelve un objeto con un proveedor y la creacion o devolucion de objetos

// creo este hook para no tener que importar en cada modulo context y auth context
export const useAuth = () => {
    const context = useContext(authContext)
    if (!context) throw new Error('there is not provider') // para que me avise si mi context esta vacio
    return context
};

// paso propiedad children
export function AuthProvider({ children }) { // Auth provider me deja utilizar en cualquier componente el valor de user, pero quien contiene el valor es context
  const [user, setUser] = useState(null);
  // a Provider se le pasa este objeto signup
  // para poder utilizarlo se exporta
  const signup = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password) // esto es lo que envia mis datos a firebase
  };
  const login = (email, password) => 
     signInWithEmailAndPassword(auth, email, password);

  useEffect(() => {
    onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
    } )
  }, [])

  return <authContext.Provider value={{ signup, login, user }}>{children}</authContext.Provider>
};
  // este provider sierve para colocar adentro mis componentes
  // all lo que tenga este provider los componentes hijos van a poder acceder a el con su propiedad children
  // le pasamos a Provider un valor que va a poder utilizarse el cual es el objeto con la propiedad user
  // asi es como todos los objetos hijos contenidos en context.Provider van a tener acceso al objeto user