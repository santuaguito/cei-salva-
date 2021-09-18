import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { getFetchUno } from '../../Ultil/getMock'
import ItemDetail from '../ItemDetail/ItemDetail'


const ItemDetailContainer = () => {
    const [prod, setProd] = useState({})
    const { idDescripcion } = useParams()

    useEffect(() => {

        getFetchUno
        .then(resp =>  setProd(resp))
        .catch(err => console.log(err)) 
    }, [])

    console.log(idDescripcion)
    
    return (
        <>
           <ItemDetail  prod={prod} />
        </>
    )
}

export default ItemDetailContainer
