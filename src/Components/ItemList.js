import { div } from "prelude-ls";
import { useEffect, useState } from "react"


const getFetch = new Promise ((resolve)=>{
    setTimeout(()=>{
        resolve (ItemsData)
    },2000)
})

const ItemList = () => {
    const [ItemsData, setItemsData] = useState([])

    useEffect(()=> {
        getFetch.then (res => setItemsData(res))
    })
}

return(
    <div>
        <div>
        {ItemsData.map((ItemsData) => <div key={ItemsData.id}> <img  src = {ItemsData.Imagen} alt="foto"/>

        <div> 
        {ItemsData.Descripcion}
        </div>

        <div> 
        <img  src = {ItemsData.Imagen} alt="foto"/>
        </div>
        
        <div> 
        {ItemsData.Precio}
        </div>
        


        </div>)}
    </div>
    </div>
)

export default ItemList