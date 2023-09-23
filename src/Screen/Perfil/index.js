import React from 'react'
import perfilImagen from './persona.png'
export default function Profile() {
  return (
    <div className='profile-container'>
        <h2>Mi perfil</h2>
        <div className='profile-info'>
            <img src={perfilImagen} alt="imagen perfil" className='profile-image'/>
            <p><strong>Nombre:</strong> Joshua</p>
            <p><strong>Correo:</strong> joshua@gmail.com</p>
            <p><strong>Nombre:</strong> Joshua</p>
        </div>
    </div>
  )
}
