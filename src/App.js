import { Routes, Route } from 'react-router-dom';
import Store from './components/Store';
import Home from './components/Home';
import ButtonAppBar from './components/Nav';
import ShoppingCart from './components/ShoppingCart'

function App() {
  return (
   <>
  <ButtonAppBar />
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/store' element={<Store />}/>
    <Route path='/shoppingcart' element={<ShoppingCart />} />
   </Routes>

   </>
  );
}

export default App;
