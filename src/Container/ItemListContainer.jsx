import React, { createFactory } from 'react';
import ItemList from '../Components/ItemList'

function ItemListContainer() {
    return (
        <div>
            <h2>Bienvenido a la Tienda </h2>
            <ItemList/>
        </div>
    )
}

export default ItemListContainer

