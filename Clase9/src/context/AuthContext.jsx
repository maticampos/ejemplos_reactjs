import React, { createContext, useContext, useState, useEffect } from "react";


// Crear el contexto de autenticación
export const AuthContext = createContext();


// Proveedor de autenticación
export function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState(null);


  // Verificar token al cargar la aplicación
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      const username = token.replace("fake-token-", "");
      setUsuario({
        nombre: username,
        email: `${username}@ejemplo.com`,
      });
    }
  }, []);


  // Función para iniciar sesión
  const iniciarSesion = (username) => {
    const token = `fake-token-${username}`;
    localStorage.setItem("authToken", token);


    console.log("Token creado:", token);
    console.log("Guardado en localStorage como authToken");


    setUsuario({
      nombre: username,
      email: `${username}@ejemplo.com`,
    });
  };


  // Función para cerrar sesión
  const cerrarSesion = () => {
    localStorage.removeItem("authToken");
    setUsuario(null);
  };


  const value = {
    usuario,
    iniciarSesion,
    cerrarSesion,
    isAuthenticated: !!usuario, // ← Propiedad computada
  };


  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}


// Hook personalizado
export function useAuthContext() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext debe usarse dentro de AuthProvider");
  }
  return context;
}
