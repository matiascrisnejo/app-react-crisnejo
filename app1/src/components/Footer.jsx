import React from 'react';



const Footer = () => {

    //aca va todo el js 
    //calculamos el año en curso
    const fecha = new Date().getFullYear();

    return (
        // <div>
        //     <p>aca van redes sociales y derecho de autor</p>
        //     <p>Año tanto {fecha}</p>
        //     <p>Visita nuestra red social:{}</p>
        // </div>
        <div classname="container" id='fondo'>
            <footer className="py-3 my-4">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Estrenos</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Peliculas</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Series</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Pelis+</a></li>
                </ul>
                <p className="text-center text-body-secondary">&copy; 2023 Company, Inc</p>
            </footer>
        </div>
    );
}

export default Footer;

