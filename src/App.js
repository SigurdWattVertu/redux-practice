import './App.css';
import Cart from 'components/cart/cart'
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart, removeItemFromCart } from 'store/cart/cart.action';
import { cartSelector } from 'store/cart/cart.selector';
import Products from 'components/products/products'

function App() {

  const dispatch = useDispatch()
  const cart = useSelector(cartSelector)

  function addItem() {
    dispatch(addItemToCart(cart.cartTotal))
  }

  function removeItem(){
    dispatch(removeItemFromCart(cart.cartTotal))

  }

  return (
    <div>
      <Products />
      <Cart />
      <button onClick={addItem}>Add Item to Cart</button>
      <button onClick={removeItem}>Add Item to Cart</button>

    </div>
  );
}

export default App;
