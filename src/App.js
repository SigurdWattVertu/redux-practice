import './App.scss';
import Cart from 'components/cart/cart'
import { useDispatch } from 'react-redux';
import { removeItemFromCart } from 'store/cart/cart.action';
import Products from 'components/products/products'

function App() {

  const dispatch = useDispatch()


  function removeItem(){
    dispatch(removeItemFromCart(cart.cartTotal))

  }

  return (
    <div className='app-container grid vgap-3'>
      <header>
        <h3 className='text-center'>Sigurds Music Shop</h3>
        <div className='flex justify-end'><Cart /></div>
      </header>
      <Products />
      <button onClick={removeItem}>Take away Item from Cart</button>
    </div>
  );
}

export default App;
