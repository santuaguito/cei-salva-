import { memo } from 'react'
import Item from './Item'


const ItemList = memo( ( {producto} ) => {
    
        
    
        return (
            <>
                { producto.map(producto=> <Item producto={producto} />     )}  
            </>
        )
    }
)

export default ItemList
