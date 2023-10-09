import './App.scss';
import Cart from 'components/cart/cart'
import Products from 'components/products/products'

function App() {


  return (
    <div className='app-container grid vgap-3'>
      <header>
        <h3 className='text-center'>Sigurds Music Shop</h3>
        <div className='flex justify-end'><Cart /></div>
      </header>
      <Products />
      {/* <button onClick={}>Take away Item from Cart</button> */}
    </div>
  );
}

export default App;
