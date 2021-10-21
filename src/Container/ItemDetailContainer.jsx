import {useState} from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'


const ItemDetailContainer = () => {
    const [producto] = useState()
    
    const [loading, setLoading] = useState(true)


    return (
        <>

            { loading ? <h2>Cargando...</h2> : <ItemDetail  producto={producto} />  }
           
        </>
    )
}

export default ItemDetailContainer
