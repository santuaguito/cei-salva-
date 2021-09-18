import './App.css';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import CarWidget from './Components/CarWidget';
import Navbar from './Components/NavBar';
import ItemListContainer from './Container/ItemListContainer';




export default function App() {

  return (
    <div className = 'App'>
      <BrowserRouter>
        <Navbar/>
          <Switch>
            <Route path='/' exact Components= {<ItemListContainer/>} /> 
            <Route path='/Productos' exact Components= {<ItemListContainer/>} /> 
            <Route path='/Nosotros' exact Components= {<ItemListContainer/>} />
            <Route path='/Contacto' exact Components= {<ItemListContainer/>} />  
            <CarWidget/>
           </Switch>
      </BrowserRouter>
      
    </div>
  );
}


