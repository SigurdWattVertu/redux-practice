import './App.css';
import Cart from 'components/cart/cart'
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from 'store/cart/cart.action';
import { cartSelector } from 'store/cart/cart.selector';

function App() {

  const dispatch = useDispatch()
  const cart = useSelector(cartSelector)

  function handleClick() {
    dispatch(addItemToCart(cart.cartTotal))
  }

  return (
    <div>
      <Cart />
      <button onClick={handleClick}>Add Item to Cart</button>
    </div>
  );
}

export default App;
