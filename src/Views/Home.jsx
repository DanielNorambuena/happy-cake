import React from 'react'
import foto from '../assets/img/foto.jpg'

const Home = () => {
    return (
        <div className='contenedor'>
            <div className='contenedor-texto'>
                <h1>Bienvenido a <b>Happy Cake</b></h1>
                <h4>El lugar de los pasteles felices </h4>
            </div>
            <div className='contenedor-img '>
                <img src={foto} className='foto1' alt="..." />
            </div>
        </div>
    )
}

export default Home