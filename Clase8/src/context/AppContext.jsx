import React, { createContext, useContext, useState } from "react";

// Crear el contexto
export const AppContext = createContext();

// Proveedor del contexto
export function AppProvider({ children }) {
  // Estado de autenticación
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [usuario, setUsuario] = useState({ nombre: "", email: "" });

  // Estado del carrito
  const [carrito, setCarrito] = useState([]);

const agregarAlCarrito = (producto) => {
    setCarrito(prevCarrito => {
      const productoExistente = prevCarrito.find(item => item.id === producto.id);
     
      if (productoExistente) {
        return prevCarrito.map(item =>
          item.id === producto.id
            ? { ...item, cantidad: (item.cantidad || 1) + 1 }
            : item
        );
      } else {
        return [...prevCarrito, { ...producto, cantidad: 1 }];
      }
    });
    alert(`Producto ${producto.nombre} agregado.`);
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  const eliminarDelCarrito = (productoId) => {
    setCarrito(carrito.filter(item => item.id !== productoId));
  };

  // Función para cerrar sesión
  const cerrarSesion = () => {
    setIsAuthenticated(false);
    setUsuario({ nombre: "", email: "" });
    vaciarCarrito(); 
  };

  // Valor que se provee a todos los componentes
  const value = {
    // Autenticación
    isAuthenticated,
    setIsAuthenticated,
    usuario,
    setUsuario,
    cerrarSesion,
   
    // Carrito
    carrito,
    setCarrito,
    agregarAlCarrito,
    vaciarCarrito,
    eliminarDelCarrito
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext debe usarse dentro de AppProvider");
  }
  return context;
}
