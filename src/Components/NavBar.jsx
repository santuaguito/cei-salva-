import React from 'react';
import { Link } from 'react-router-dom';
import CarWidget from'./CarWidget';
import './NavBar.css';


function NavBar() {
    return (
        <div className = "Navbar">
            
            <nav className = "Nav">
                <Link to = '/'> 

                </Link>   
                    <ul className = "NavMenu">
                        <li><button className ="boton"><a href = "Inicio">Inicio</a></button></li>
                        <link to = '/Productos'> 
                        <li><button className ="boton"><a href = "Productos">Productos</a></button></li>
                        </link>
                        <link to='/Nosotros'>
                        <li><button className ="boton"><a href = "Nosotros">Nosotros</a></button></li>
                        </link>
                        <link to='/Contacto'>
                        <li><button className ="boton"><a href = "Contacto">Contacto</a></button></li>
                        </link>
                    </ul>
       
                
            </nav>
            
           <CarWidget/>
        </div>
        
    )
    
}

export default NavBar
