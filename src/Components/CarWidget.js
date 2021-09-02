import React from 'react'
import './CarWidget.css'
import CartLogo from './img/carrito.png';


function CarWidget() {
    return (
        <div>
            <img src={CartLogo} alt="Imagen carrito" className ="Cart"/>
        </div>
    )
}

export default CarWidget
