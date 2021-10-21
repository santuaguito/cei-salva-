// import { useContext } from 'react'
import { Link } from "react-router-dom"



const Item = ({producto}) => {


    return (       
            <div key={producto.id} className="card w-50 mt-5" >
                    <div className="card-header">
                        {producto.title}
                    </div>
                    <div className="card-body">
                        <img src={producto.imgaeID} alt="foto" />
                        {producto.precio}
                       
                    </div>
                    <div className="card-footer">
                        <Link to = {`/detalle/${producto.id}`} >
                            <button className="btn btn-outline-primary btn-block">
                                Detalle de producto
                            </button>
                        </Link>
                    </div>
                    
                </div>
        
    )
}

export default Item



