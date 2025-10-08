import React, { useState, useEffect } from 'react';

function ConsultaEncabezadosAPI() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const [infoApi, setInfoApi] = useState({});

  useEffect(() => {
    fetch("https://68d482e3214be68f8c696ae2.mockapi.io/api/productos")
      .then((respuesta) => {
        // Acceso a los encabezados
        const headers = Object.fromEntries(respuesta.headers.entries());

        // Utilidades comunes de encabezados
        const contentType = respuesta.headers.get("content-type");
        const total = respuesta.headers.get("X-Total-Count"); 
        const date = respuesta.headers.get("date");
        const remaining = respuesta.headers.get("X-RateLimit-Remaining"); 

        // Mostrar información en consola
        console.log("Encabezados recibidos:", headers);
        console.log("Tipo de contenido:", contentType);
        console.log("Fecha de respuesta:", date);
        console.log("Total de productos (si aplica):", total);
        console.log("Solicitudes restantes (si aplica):", remaining);

        // Guardar información útil en estado para mostrarla en la interfaz
        setInfoApi({
          contentType,
          total,
          date,
          remaining,
        });

        return respuesta.json();
      })
      .then((datos) => {
        setProductos(datos);
        setCargando(false);
      })
      .catch((error) => {
        console.error("Error!", error);
        setError("Hubo un problema al cargar los productos.");
        setCargando(false);
      });
  }, []);

  if (cargando) return <p>Cargando productos...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div>
      <h2>Productos</h2>
      
      {/* Mostrar información útil de los encabezados */}
      <div style={{ padding: "10px", backgroundColor: "#f5f5f5", marginBottom: "20px" }}>
        <h4>Información de la API:</h4>
        <p><strong>Content-Type:</strong> {infoApi.contentType || "No disponible"}</p>
        <p><strong>Total de productos:</strong> {infoApi.total || "No disponible"}</p>
        <p><strong>Fecha de respuesta:</strong> {infoApi.date || "No disponible"}</p>
        <p><strong>Solicitudes restantes:</strong> {infoApi.remaining || "No disponible"}</p>
      </div>

      {/* Mostrar productos */}
      <ul>
        {productos.map((producto) => (
          <li key={producto.id}>
            <strong>{producto.nombre}</strong> - ${producto.precio}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ConsultaEncabezadosAPI;