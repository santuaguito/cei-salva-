import { div } from "prelude-ls";
import { useEffect, useState } from "react";
import './img.css';
import data from './Item.js';


const getFetch = new Promise ((resolve)=>{
    setTimeout(()=>{
        resolve (data)
    },2000)
})

const ItemList = () => {
    const [ItemsData, setItemsData] = useState([])

    useEffect(()=> {
        getFetch.then (res => setItemsData(res))
    })



return(
    <div>
        <div>
        {ItemsData.map((item) => <div key={item.id}>

        <div> 
        {item.Descripcion}
        </div>

        <div> 
        {item.Precio}
        </div>

        <div className="img"> 
        <img  src = {item.Imagen} alt="foto"/>
        </div>
        
        
        


        </div>)}
    </div>
    </div>
)}

export default ItemList