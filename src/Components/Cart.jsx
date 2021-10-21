import { Link } from 'react-router-dom'
import { useCartContext } from './cartContext'


const Cart = ( {condition = true} ) => {  

    
    const { cartList, vaciarCarrito, deleteFromCart } = useCartContext()
    
    
    console.log(cartList)
    return (
        <div>

            {cartList.length === 0  ?   
                <div>
                    <h1>Agregar productos</h1>
                    <Link to='/' >Ir a Comprar</Link>
                </div>
            : 
                <div>
                    {cartList.map(resp => <div key={resp.item.id}>
                        <h2>{resp.item.name}</h2>
                        <button onClick={()=> deleteFromCart(resp)} > X </button>
                    </div>
                    )}
                    <button onClick={() => vaciarCarrito()} >Vaciar Carrito</button>
                </div>
            }
              



        </div>
    )
}

export default Cart
