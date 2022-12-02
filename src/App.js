// import { useState } from "react";
import Login from "./components/noauth/Login.js";
import Welcome from "./components/authh/Welcome.js";
import { AuthProvider } from "./components/context/authContext";
import { Route, Routes } from "react-router-dom";
import Register from "./components/noauth/Register.js";
import { ProtectedRoute } from "./components/authh/ProtectedRoute.js";

function App() {
  // const [user, setUser] = useState(undefined); // {user:'mayan'}

  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route
            path="/Welcome"
            element={
              <ProtectedRoute>
                <Welcome />
              </ProtectedRoute>
            }
          />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
