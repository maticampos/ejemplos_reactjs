import React from 'react';

function Header() {
    return (
        <header style={{
            backgroundColor: "#4CAF50",
            padding: "10px",
            textAlign: "center",
            color: "white",
            width: "100%",
        }}>
            <h1>Bienvenidos a mi App React</h1>
        </header>
    );
}

export default Header;

{/* Asegúrate de que las reglas .css no se pisen con estos valores asignados. 
    Estos valores funcionaran cuando todos los .css de l proyecto esté vacíos o se eliminen las importaciones .css del App.jsx */}