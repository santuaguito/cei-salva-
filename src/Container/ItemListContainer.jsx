import {useState, useEffect }from 'react';
import ItemList from '../Components/ItemList'

function ItemListContainer() {

    useEffect(() => {

        if (idDescripcion) {
            getFetch
            .then(respuesta =>{
                setData(respuesta.filter(data => data.Descripcion===idDescripcion))         
            })
            .catch(error => console.log(error))
            .finally(()=> setLoading(false))
            
        } else {            
            getFetch
            .then(respuesta =>{
                setProducto(respuesta)         
            })
            .catch(error => console.log(error))
            .finally(()=> setLoading(false))
        }               
        
    }, [idDescripcion])
        
    console.log(idDescripcion);








    return (
        <div>
            <h2>Bienvenido a la Tienda </h2>
            { loading ? <h2>Cargando...</h2> :   <ItemList data={data} /> }
            
        </div>
    )
}

export default ItemListContainer

