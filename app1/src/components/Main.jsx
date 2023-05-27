import React from 'react';
import {useState} from 'react'
import foto from '../assert/foto1.jpg'


const Main = () => {

    
    const [peliculas,agregarPelicula] = useState(
        [
            {id: 1, nombre:"Fast & Furious X",imagen:foto},
            {id: 2, nombre:"La Sirenita",imagen:foto},
            {id: 3, nombre:"Fast & Furious X",imagen:foto},
            {id: 4, nombre:"Fast & Furious X",imagen:foto},
            {id: 5, nombre:"Fast & Furious X",imagen:foto},
            {id: 6, nombre:"Fast & Furious X",imagen:foto},
            {id: 7, nombre:"Fast & Furious X",imagen:foto},
            {id: 8, nombre:"Fast & Furious X",imagen:foto},
            {id: 9, nombre:"Fast & Furious X",imagen:foto},
            {id: 10, nombre:"Fast & Furious X",imagen:foto},
            {id: 11, nombre:"Fast & Furious X",imagen:foto},
            {id: 12, nombre:"Fast & Furious X",imagen:foto},
            {id: 13, nombre:"Fast & Furious X",imagen:foto},
            {id: 14, nombre:"Fast & Furious X",imagen:foto},
            {id: 15, nombre:"Fast & Furious X",imagen:foto}
        ]
    );

    return ( 
        <div className='mainFondo'>
            <ul className='gridTarjeta'>
                {
                    peliculas.map(pelicula => (
                        <li className='lista'>
                            <img className='imgTitulo' src={pelicula.imagen} alt="foto" />
                            <div className='peliTitulo'>{pelicula.nombre}</div>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default Main;


