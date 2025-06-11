import React, { useState } from 'react';

function Semaforo() {
  const [colorActivo, setColorActivo] = useState('');
  function cambiarColor(color) {
    setColorActivo(color);
  }
  const estiloLuz = {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    margin: '10px auto',
    
  };

  return (
    <div
      style={{
        width: '120px',
        margin: '50px auto',
        backgroundColor: '#333',
        padding: '20px',
        borderRadius: '10px',
      }}
    >
      {/* Luz roja */}
      <div
        onClick={() => cambiarColor('rojo')}
        style={{
          ...estiloLuz,
          backgroundColor: 'red',
          boxShadow: colorActivo === 'rojo' ? '0 0 20px 10px red' : 'none',
          transition: 'box-shadow 0.3s',
        }}
      ></div>

      {/* Luz amarilla */}
      <div
        onClick={() => cambiarColor('amarillo')}
        style={{
          ...estiloLuz,
          backgroundColor: 'yellow',
          boxShadow: colorActivo === 'amarillo' ? '0 0 20px 10px yellow' : 'none',
          transition: 'box-shadow 0.3s',
        }}
      ></div>

      {/* Luz verde */}
      <div
        onClick={() => cambiarColor('verde')}
        style={{
          ...estiloLuz,
          backgroundColor: 'green',
          boxShadow: colorActivo === 'verde' ? '0 0 20px 10px green' : 'none',
          transition: 'box-shadow 0.3s',
        }}
      ></div>
    </div>
  );
}

export default Semaforo;
