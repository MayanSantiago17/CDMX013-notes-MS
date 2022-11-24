import { useState } from "react";
import Login from "./components/noauth/Login.js";
import Welcome from "./components/authh/Welcome.js";




function App() {
  const [user, setUser] = useState(undefined); // {user:'mayan'}

  return (
    <>
    {user?
    <Welcome/>:<Login/>}
    </>
   
  );
}

export default App;
