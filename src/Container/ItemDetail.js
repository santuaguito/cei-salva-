import React from 'react'


const ItemDetail = ({prod}) => {
    
    const {agregarItem} = useCartContext()
    
    const handleAgregar =(cant)=>{
        agregarItem(prod,cant)
    }

    return (
        <>
            <h2>{prod.Descripcion}</h2>
            <h2>{prod.Precio}</h2>
            <img src={prod.Imagen} alt="foto"  />           
            <Caso2 />
            <button onClick={handleAgregar}>agregar</button>
        </>
    )
}

export default ItemDetail
