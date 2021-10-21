import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
// import { getFirebase } from '../Services/getFirebase';
import { getFirestore } from '../Services/getFirebase';
import ItemList from '../Components/ItemList';





function ItemListContainer({greeting}) { 

    const [producto, setProducto] = useState([])   
    // const [item, setItem] = useState({})   
    const [loading, setLoading] = useState(true)
    const [bool, setBool] = useState(true)

    const { idCategory } = useParams()


    useEffect(() => {

        const dbQuery = getFirestore()

        dbQuery.collection('items').get()
        .then(resp => {
            setProducto( resp.docs.map(item => ( {id: item.id, ...item.data()} ) ) )
        })
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))                   
        
    }, [idCategory])
        
   
   const handleClick=(e)=>{
        e.preventDefault() 
        setBool(!bool)
    }

    const handleAgregar=()=>{
        setProducto([
            ...producto,
            
        ])
    }

    

    return (
        <div className='border border-3 border-primary'>             
            <h1> {greeting}</h1> 
         
            <button onClick={handleClick}>Cambiar estado </button> 
                      
            <button onClick={handleAgregar}>Agregar Item </button>
            { loading ? <h2>Cargando...</h2> :   <ItemList producto={producto} /> }              
          
        </div>
    )
}

export default ItemListContainer
