import React from 'react'
import './welcome.css';
export default function index() {
  return (
    <div>
        <h1>App con React</h1>
        <p>Bienvenido a mi app donde podras revisar temas interesantes </p>
        <button className='button-listado'>Ir al listado de tareas</button>
        <button className='button-mas'>Mas sobre yo</button>
    </div>
  )
}
