import './App.css';

import {NavBar} from './Components/NavBar';
import { Router, Switch, Route} from 'react-router-dom';
import ItemListContainer from './Container/ItemListContainer';

import {CartContext} from './Components/cartContext';
import CarWidget from './Components/CarWidget';
import 'bootstrap/dist/css/bootstrap.min.css';



export default function App() {

  return (
    <div className = 'App'>

      <CartContext>
        


      <Router>
        <NavBar/>
          <Switch>
            <Route path='/' exact Components= {<ItemListContainer/>} /> 
            <Route path='/Remeras/:idCategory' exact Components= {<ItemListContainer/>} /> 
            <Route path='/Tejidos:idCategory' exact Components= {<ItemListContainer/>} />
            <Route path='/Pantalones:idCategory' exact Components= {<ItemListContainer/>} />  
            <Route exact path='/cart'>
              <CarWidget/>
            </Route>
            
            
           </Switch>
      </Router>
      
      </CartContext>
      
    </div>
  );
}


