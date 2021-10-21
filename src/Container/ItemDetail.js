import React from 'react'
import ItemCount from '../Components/ItemCount'
import { useCartContext } from '../Components/cartContext'

const ItemDetail = ({producto}) => {
    
    const {agregarItem} = useCartContext()
    
    const onAdd=(cant)=>{
        agregarItem(producto, cant)
    }

    return (
        <>
            <h2>{producto.descripcion}</h2>
            <h2>{producto.Precio}</h2>
            <img src={producto.imageID} alt="foto"  />           
            <ItemCount initial={1} stock={5} onAdd={onAdd} />
            
        </>
    )
}

export default ItemDetail
